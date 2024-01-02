<template>
  <div>

          <v-card flat>
            <v-card-text>

              <!-- Grot chat -->
              <div v-if="grotShow">
                <v-container>
                  <v-row>
                    <v-col>
                      <div v-for="(item, index) in chat" :key="index" 
                          :class="['d-flex flex-row my-2']">

                        <v-avatar v-if="item.from == 'user'" :color="item.from == 'user' ? 'transparent': 'red'" size="36">
                          <v-icon size="36" icon="mdi-account-circle"></v-icon>
                        </v-avatar>
                        <span v-if="item.from == 'user'" class="rounded ml-3 bg-grey-darken-3">
                          <MdPreview
                            :modelValue="item.msg"
                            :theme="getCurrentTheme()" 
                            language="en-US" 
                            :toolbars="['code','preview']"
                            :footers="[]" 
                            previewTheme="github" 
                            codeTheme="github"
                            class="rounded"
                          />
                        </span>

                        <v-avatar v-if="item.from != 'user'" :color="item.from == 'user' ? 'indigo': 'transparent'" image="/grot-icon.png" size="36">
                        </v-avatar>
                        <span v-if="item.from != 'user'" class="rounded ml-3 bg-grey-darken-3">
                          <MdPreview
                            :modelValue="item.msg"
                            :theme="getCurrentTheme()" 
                            language="en-US" 
                            :toolbars="['code','preview']"
                            :footers="[]" 
                            previewTheme="github" 
                            codeTheme="github"
                            class="rounded"
                          />
                        </span>

                      </div>
                    </v-col>
                  </v-row>
                  <v-row no-gutters>
                    <v-col>

                      <div class="d-flex flex-row align-center">
                        <v-text-field ref="chat" v-model="msg" clearable placeholder="Discuss with Grot" @keypress.enter="sendToGrot()"></v-text-field>
                        <div class="mb-4">
                          <v-btn flat v-if="recognition" class='ml-2' d-flex @click.stop="toggle ? endSpeechRecognition() : startSpeechRecognition()" icon :color="!toggle ? 'primary' : speaking ? 'red lighten-2' : 'red darken-4'" :class="{ pulse: toggle }">
                            <v-icon>{{ micIcon }}</v-icon>
                          </v-btn>
                          <v-btn 
                            icon 
                            flat
                            class="ml-4" 
                            @click="sendToGrot()"
                            :loading="loading"
                            color="primary"
                          >
                            <v-icon>mdi-send</v-icon>
                          </v-btn>
                        </div>
                      </div>
                    </v-col>
                  </v-row>
                </v-container>
              </div>
              
            </v-card-text>
          </v-card>
  </div>
</template>

<script setup>
import { MdPreview } from 'md-editor-v3'
import 'md-editor-v3/lib/style.css'

</script>
<script>
import { useTheme } from 'vuetify'
import { event } from 'vue-gtag'

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = SpeechRecognition ? new SpeechRecognition() : false;

export default {
  mounted() {
    this.setVariablesFromHash();
  },
  created() {
    window.addEventListener("resize", this.setMobile())
    this.setMobile()
  },
  beforeDestroy() {
    recognition.stop();
    recognition.abort();
  },
  data: () => ({
    lang: "en_US",
    error: false,
    speaking: false,
    toggle: false,
    micIcon: "mdi-microphone",
    mobile: false,
    loading: false,
    theme: 'dark',
    grotApplicationId: "06a226e5-ecb6-4193-8996-aab4460a15e0",
    grotConversationId: null,
    grotShow: true,
    chat: [],
    msg: "",
  }),
  watch: {
    msg: function (val) {
      if (val == null || val.trim().replace(/\.$/, '').trim() == "") {
        this.msg = ""
        return
      } else {
        if (this.loading) {
          return
        } else {
          var tmp = val.toLowerCase().trim().replace(/\.$/, '').trim()
          if (tmp.endsWith('send') | tmp.endsWith('sent')) {
            this.msg = this.msg.trim()
            this.msg = this.msg.split(" ").slice(0, -1).join(" ")
            this.sendToGrot()
          } 
        }
      }
    }
  },
  methods: {
    scrollDown() {
      return
      //this.$refs["chat"].scrollIntoView({ behavior: "smooth", block: "end" });
    },
    endSpeechRecognition() {
      this.toggle = false;
      this.speaking = false;
      this.micIcon = "mdi-microphone";
      recognition.stop();
      recognition.abort();
    },
    startSpeechRecognition() {
      this.toggle = true;
      this.micIcon = "mdi-microphone-off";

      // build custom grammar for Grot use case
      // try {
      //   var terms = [ 'grot' , 'grafana', 'datasource', 'dashboard', 'panel', 'query', 'alert', 'variable', 'template', 'table', 'graph', 'pie', 'bar', 'line', 'singlestat', 'gauge', 'heatmap', 'alertlist', 'text', 'stat', 'dashlist', 'alert', 'alerting', 'alertmanager'];
      //   terms.concat([ 'equal', 'not equal', 'greater than', 'less than', 'greater or equal', 'less or equal', 'contains', 'not contains', 'starts with', 'ends with', 'matches regex', 'does not match regex', 'is empty', 'is not empty', 'is null', 'is not null', 'is true', 'is false', 'is above', 'is below', 'is outside range']);
      //   var grammar = '#JSGF V1.0; grammar grot; public <grot> = ' + terms.join(' | ') + ';';
      //   var speechRecognitionList = new webkitSpeechGrammarList(); //new SpeechGrammarList();
      //   speechRecognitionList.addFromString(grammar, 1);
      //   recognition.grammars = speechRecognitionList;
      // } catch (e) {
      //   console.log(e)
      // }

      recognition.lang = this.lang;
      recognition.continuous = true;
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;

      recognition.onend = (event) => {
        if (this.toggle) {
          this.startSpeechRecognition()
        } else {
          this.toggle = false;
          this.speaking = false;
          this.micIcon = "mdi-microphone";
        }
      };

      recognition.onresult = (event) => {
        if (typeof event.results === "undefined") {
          recognition.stop();
          return;
        }
        for (var i = event.resultIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal & event.results[i][0].transcript.trim() != "") {
            this.msg += this.capitalizeFirstLetter(event.results[i][0].transcript).trim() + ". ";
          }
        }
      };

      try {
        recognition.start();
      } catch (e) {
        this.toggle = false
        console.log(e)
      }
    },
    capitalizeFirstLetter(string) {
      string = string.trim();
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    setVariablesFromHash() {
      var hash = window.location.hash.substring(1)
      var obj = {}
      if (hash != null && hash != "") {
        hash.split("&").forEach(function (item) {
          var s = item.split("="),
            k = s[0],
            v = s[1] && decodeURIComponent(s[1]);
          (obj[k] || (obj[k] = [])).push(v);
        });
        if (obj["question"] != null && obj["question"][0] != "") {
          this.msg = obj["question"][0]
          this.sendToGrot()
        }
      }
    },
    setMobile() {
      const orientation = window.screen.orientation.type
      if (orientation === "portrait-primary") {
        this.mobile = true;
      } else if (orientation === "landscape-primary") {
        if (screen.width <= 760) {
          this.mobile = true;
        } else {
          this.mobile = false;
        }
      }
    },
    sendToGrot() {
      if (this.msg == null || this.msg.trim() == "") {
        return
      }
      this.loading = true
      this.askGrot(this.msg)
      this.msg = ""
    },
    askGrot(message) {
      var url = `https://api.pal.ai/v1/conversations`;
      var data = {
        "applicationId": this.grotApplicationId,
        "conversationId": this.grotConversationId,
        "messageContent": message,
        "isStreaming": false,
      };
      this.chat.push({from: 'user', msg: data.messageContent});
      this.chat.push({from: 'grot', msg: "Moment, Grot is thinking..."})
      event('askGrot', { source: 'user' })
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      .then(response => response.json())
      .then(data => {
        this.grotConversationId = data.conversationId;
        this.chat.pop()
        this.chat.push({from: 'grot', msg: data.messages[data.messages.length - 1].content});
        this.loading = false
        this.scrollDown()
      })
      .catch((error) => {
        console.error('Error:', error);
        this.chat.pop()
        this.chat.push({from: 'grot', msg: "Error during communication with Grot: " + error});
        this.loading = false
      });
    },
    getCurrentTheme() {
      const theme = useTheme()
      return theme.global.current.value.dark ? 'dark' : 'light'
    }
  },
}
</script>

<style>
.mdi-bug {
  background: -webkit-linear-gradient(#f05a28, #fbc90b);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.md-editor-preview-wrapper {
  padding-left: 1em;
  padding-right: 1em;
  padding-top: 1em;
  padding-bottom: 0;
  width: 100%;
}
.md-editor-preview-wrapper p {
  word-break: normal;
}

@keyframes pulse {
  from {
    transform: scale3d(1, 1, 1);
  }
  50% {
    transform: scale3d(1.15, 1.15, 1.15);
  }
  to {
    transform: scale3d(1, 1, 1);
  }
}

.pulse {
  animation-name: pulse;
  animation-fill-mode: both;
  animation-duration: 1s;
  animation-delay: 1s;
  animation-iteration-count: infinite;
}
</style>

<style lang="less">
@import '../assets/styles/md.less';
</style>
