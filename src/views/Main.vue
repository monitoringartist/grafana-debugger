<template>
  <div>
    <v-stepper editable flat mandatory :mobile="mobile" :alt-labels="true" v-model="step">
      <v-stepper-header>
        <v-stepper-item
          edit-icon="mdi-information"
          complete-icon="mdi-information"
          icon="mdi-information"
          :editable="true"
          :complete="step > 1"
          :value="1"
          color="primary"
          style= "padding-bottom: 1rem;"
          title="Introduction"
        />

        <v-divider class="border-opacity-100" :thickness="2" :color="true && step > 1 ? 'primary' : ''" />

        <v-stepper-item
          edit-icon="mdi-cog"
          complete-icon="mdi-cog"
          icon="mdi-cog"
          :editable="true"
          :complete="step > 2"
          :value="2"
          :color="true && step > 1 ? 'primary' : ''"
          style= "padding-bottom: 1rem;"
          title="Deployment"
        />

        <v-divider class="border-opacity-100" :thickness="2" :color="true && step > 2 ? 'primary' : ''" />

        <v-stepper-item
          edit-icon="mdi-alert"
          complete-icon="mdi-alert"
          icon="mdi-alert"
          :editable="true"
          :complete="step > 3"
          :value="3"
          :color="true && step > 2 ? 'primary' : ''"
          style= "padding-bottom: 1rem;"
          title="Problem"
        />

        <v-divider class="border-opacity-100" :thickness="2" :color="true && step > 3 ? 'primary' : ''" />

        <v-stepper-item
          edit-icon="mdi-book-open-variant"
          complete-icon="mdi-book-open-variant"
          icon="mdi-book-open-variant"
          :editable="true" 
          :complete="step > 4"
          :value="4"
          :color="true && step > 3 ? 'primary' : ''"
          style= "padding-bottom: 1rem;"
          title="Documentation"
        />

        <v-divider class="border-opacity-100" :thickness="2" :color="true && step > 4 ? 'primary' : ''" />

        <v-stepper-item
          edit-icon="mdi-lightbulb-on"
          complete-icon="mdi-lightbulb-on"
          icon="mdi-lightbulb-on"
          :editable="true"
          :complete="step == 5"
          :value="5"
          :color="true && step > 4 ? 'primary' : ''"
          style= "padding-bottom: 1rem;"
          title="Recommendations"
        />

      </v-stepper-header>

      <v-stepper-window>

        <v-stepper-window-item :value="1">
          <v-card title="Introduction" flat>
            <v-card-text>
              Grafana debugger provides a structured guide on resolving issues with Grafana, covering aspects such as configuration, visualization creation, and queries.
              <br /><br />
              A notable 73% of Grafana Debugger users swiftly identified their issues and find further resources with this tool immediately. Others are able to create community posts, 
              which will have much higher chance to attracts the attention of Grafana community members, because it contains all details required for quick problem assesment.
              All debugging steps are based on long term experience of Grafana community members and on regular communication with Grafana Enterprise support engineers.
              <br /><br />
              <v-btn color="info" @click="step = 2">Start debugging</v-btn>

              <v-divider class="ma-4"></v-divider>

              Some debugging examples:
              <br /><br />
              <a href="#step=2&step1Version=v10.2.4&step1Type=Enterprise (Free %26 unlicensed)&step1Cloud=false&step1Installation=installed as container with orchestration&step1Os=Linux&step1DeploymentDetails=My docker-compose yaml file%3A%0A```yaml%0Aversion%3A '3.8'%0Aservices%3A%0A%20 grafana%3A%0A%20%20%20 image%3A grafana%2Fgrafana-enterprise%3Alatest%0A%20%20%20 ports%3A%0A%20%20%20%20%20 - 3000%3A3000%0A%20%20%20 environment%3A%0A%20%20%20%20%20 - GF_AUTH_ANONYMOUS_ENABLED%3Dtrue%0A%20%20%20%20%20 - GF_AUTH_ANONYMOUS_ORG_ROLE%3DAdmin%0A%20%20%20%20%20 - GF_AUTH_ANONYMOUS_ORG_NAME%3DMain Org.%0A%20%20%20%20%20 - GF_AUTH_ANONYMOUS_ORG_ID%3D1%0A%20%20%20 volumes%3A%0A%20%20%20%20%20 - grafana-storage%3A%2Fvar%2Flib%2Fgrafana%0Avolumes%3A%0A%20 grafana-storage%3A%0A```&step2WhatHappened=I don't see SAML login option in the login page.&step2WhatsExpected=I expect to see SAML login option in the login page.&step2HowReproduce=1. Open Grafana login page.%0A2. See that SAML login option is missing.&step2AdditionalDetails=I have configured SAML authentication according to the documentation. I use Azure IDP.&step3DocumentationLink=https%3A%2F%2Fgrafana.com%2Fdocs%2Fgrafana%2Flatest%2Fauth%2Fsaml%2F&step4Title=Missing SAML Login Option in Grafana Enterprise Deployment&step4Category=Authentication&step4SearchQuery=Grafana Enterprise missing SAML login option&step4Tags=saml%2Clogin%2C grafana enterprise%2C deployment%2C docker%2C linux%2C azure idp">Issue: SAML login is not available</a>

            </v-card-text>
          </v-card>
        </v-stepper-window-item>

        <v-stepper-window-item :value="2">
          <v-card title="Deployment" flat>
            <v-card-text>
              
                <h3>
                  Which Grafana version do you use?
                </h3>
                You can find Grafana details, when you visit Grafana login page <code>/login</code> 
                (e.g. <code>https://grafana.example.com/login</code>), where you should see Grafana version and type in the footer.
                <v-text-field
                  v-model="step1Version"
                  :autofocus="true"
                  :clearable="true"
                  placeholder="v10.2.3 "
                  label="Grafana version"
                >
                </v-text-field>
              

              <v-divider :thickness="20" class="border-opacity-0"></v-divider>
              
                <h3>
                  Which Grafana type do you use?
                </h3>

                <v-chip-group
                  v-model="step1Type"
                  column
                  :multiple="false"
                  :mandatory="true"
                  selected-class="text-primary"
                >
                  <v-chip
                    filter
                    variant="outlined"
                    value="Open Source"
                  >
                    Grafana Open Source (OSS)
                  </v-chip>
                  <v-chip
                    filter
                    variant="outlined"
                    value="Enterprise (Free & unlicensed)"
                  >
                    Grafana Enterprise (Free & unlicensed)
                  </v-chip>
                  <v-chip
                    filter
                    variant="outlined"
                    value="Enterprise (Licensed)"
                  >
                    Grafana Enterprise (Licensed)
                  </v-chip>
                </v-chip-group>
             
              <v-divider :thickness="20" class="border-opacity-0"></v-divider>

              <h3>
                Do you use Grafana managed by cloud provider?
              </h3>

              <v-chip-group
                v-model="step1Cloud"
                column
                :multiple="false"
                :mandatory="true"
                selected-class="text-primary"
              >
                <v-chip
                  filter
                  variant="outlined"
                  value="true"
                >
                  Yes, I use Grafana managed by cloud provider
                </v-chip>
                <v-chip
                  filter
                  variant="outlined"
                  value="false"
                >
                  No, I use on-premise (selfhosted) Grafana
                </v-chip>
              </v-chip-group>

              <v-divider :thickness="20" class="border-opacity-0"></v-divider>

              <h3 v-if="step1Cloud == 'true'">
                Which cloud provider do you use?
              </h3>

              <v-chip-group
                v-if="step1Cloud == 'true'"
                v-model="step1CloudProvider"
                column
                :multiple="false"
                :mandatory="true"
                selected-class="text-primary"
              >
                <v-chip
                  filter
                  variant="outlined"
                  value="Grafana Cloud"
                >
                  Grafana Cloud (URL contains grafana.net domain usually)
                </v-chip>
                <v-chip
                  filter
                  variant="outlined"
                  value="AWS - Amazon Managed Grafana (AMG)"
                >
                  Amazon Managed Grafana (AMG on AWS)
                </v-chip>
                <v-chip
                  filter
                  variant="outlined"
                  value="Azure - Azure Managed Grafana"
                >
                  Azure Managed Grafana
                </v-chip>
                <v-chip
                  filter
                  variant="outlined"
                  value="another not listed cloud provider"
                >
                  Another not listed cloud provider
                </v-chip>
              </v-chip-group>

              <h3 v-if="step1Cloud == 'false'">
                How did you deploy/install your on-premise Grafana instance?
              </h3>

              <v-chip-group
                v-if="step1Cloud == 'false'"
                v-model="step1Installation"
                column
                :multiple="false"
                :mandatory="true"
                selected-class="text-primary"
              >
                <v-chip
                  filter
                  variant="outlined"
                  value="installed from OS package with package manager on the machine"
                >
                  Installed from OS package with package manager on the machine (apt, yum, dng, pkg, apk, brew, ...)
                </v-chip>
                <v-chip
                  filter
                  variant="outlined"
                  value="installed as simple container"
                >
                  Installed as simple container (Docker, Docker Desktop, Podman, ...)
                </v-chip>
                <v-chip
                  filter
                  variant="outlined"
                  value="installed as container with orchestration"
                >
                  Installed as container with orchestration (Kubernetes, Docker Compose, AWS ECS, Nomad, ...)
                </v-chip>
                <v-chip
                  filter
                  variant="outlined"
                  value="installed/compiled from the source code"
                >
                  Installed/compiled from the source code
                </v-chip>
              </v-chip-group>

              <v-divider v-if="step1Cloud == 'false'" :thickness="20" class="border-opacity-0"></v-divider>

              <h3 v-if="step1Cloud == 'false'">
                Which operating system do you use to run on-premise Grafana?
              </h3>

              <v-chip-group
                v-if="step1Cloud == 'false'"
                v-model="step1Os"
                column
                :multiple="false"
                :mandatory="true"
                selected-class="text-primary"
              >
                <v-chip
                  filter
                  variant="outlined"
                  value="Linux"
                >
                  Linux
                </v-chip>
                <v-chip
                  filter
                  variant="outlined"
                  value="Windows"
                >
                  Windows
                </v-chip>
                <v-chip
                  filter
                  variant="outlined"
                  value="macOS"
                >
                  macOS
                </v-chip>
                <v-chip
                  filter
                  variant="outlined"
                  value="another OS"
                >
                  Another OS
                </v-chip>
              </v-chip-group>

              <v-divider v-if="step1Cloud == 'false'" :thickness="20" class="border-opacity-0"></v-divider>

              <h3 v-if="step1Cloud == 'false'">
                Details about your on-premise Grafana deployment:
              </h3>
              <div v-if="step1Cloud == 'false'">
                {{ step1DeploymentDetailsDescription }} Please use 3 backticks (```) to format your logs, commands or configuration files for readibility.
              </div>

              <MdEditor v-if="step1Cloud == 'false'" 
                v-model="step1DeploymentDetails" 
                :theme="getCurrentTheme()" 
                language="en-US" 
                :toolbars="['code','preview']"
                :footers="[]" 
                previewTheme="github" 
                codeTheme="github"
                style="height: 20em;"
              >  
              </MdEditor>
              
              <br /><br />
              
              <v-btn color="info" @click="step = 1">Previous step</v-btn>
              &nbsp;
              <v-btn color="info" @click="step = 3">Next step</v-btn>

            </v-card-text>
          </v-card>
        </v-stepper-window-item>

        <v-stepper-window-item :value="3">
          <v-card title="Problem" flat>
            <v-card-text>

              <h3>
                What kind of problem happened?
              </h3>
              <div>
                Please use 3 backticks (```) to format your logs, commands or configuration files for readibility.
              </div>

              <MdEditor 
                v-model="step2WhatHappened" 
                :theme="getCurrentTheme()" 
                language="en-US" 
                :toolbars="['code','preview']"
                :footers="[]" 
                previewTheme="github" 
                codeTheme="github"
                style="height: 20em;"
              >  
              </MdEditor>

              <v-divider :thickness="20" class="border-opacity-0"></v-divider>

              <h3>
                What did you expect to happen?
              </h3>
              <div>
                Please use 3 backticks (```) to format your logs, commands or configuration files for readibility.
              </div>

              <MdEditor 
                v-model="step2WhatsExpected" 
                :theme="getCurrentTheme()" 
                language="en-US" 
                :toolbars="['code','preview']"
                :footers="[]" 
                previewTheme="github" 
                codeTheme="github"
                style="height: 20em;"
              >  
              </MdEditor>

              <v-divider :thickness="20" class="border-opacity-0"></v-divider>

              <h3>
                How to reproduce it?
              </h3>
              <div>
                Please provide a steps. Please use 3 backticks (```) to format your logs, commands or configuration files for readibility.
              </div>

              <MdEditor 
                v-model="step2HowReproduce" 
                :theme="getCurrentTheme()" 
                language="en-US" 
                :toolbars="['code','preview']"
                :footers="[]" 
                previewTheme="github" 
                codeTheme="github"
                style="height: 20em;"
              >  
              </MdEditor>

              <v-divider :thickness="20" class="border-opacity-0"></v-divider>

              <h3>
                Additional problem details
              </h3>
              <div>
                Please provide more details, which can be usefull. Did it work before? If it worked before, what Grafana version worked correctly? Provide more details about plugin (name, version, installation method) if problem is related to plugin. Please use 3 backticks (```) to format your logs, commands or configuration files for readibility.
              </div>

              <MdEditor 
                v-model="step2AdditionalDetails" 
                :theme="getCurrentTheme()" 
                language="en-US" 
                :toolbars="['code','preview']"
                :footers="[]" 
                previewTheme="github" 
                codeTheme="github"
                style="height: 20em;"
              >  
              </MdEditor>

              <v-divider :thickness="20" class="border-opacity-0"></v-divider>
              
              <br /><br />
              
              <v-btn color="info" @click="step = 2">Previous step</v-btn>
              &nbsp;
              <v-btn color="info" @click="step = 4">Next step</v-btn>
            </v-card-text>
          </v-card>
        </v-stepper-window-item>

        <v-stepper-window-item :value="4">
          <v-card title="Documentation" flat>
            <v-card-text>

              <h3>
                Documentation link
              </h3>
              <div>
                Please provide a link(s) to documentation, which you have used to configure Grafana. Make sure that you have used documentation applicable for your Grafana version and type - {{ step1Type }} {{ step1Version }}.
                Users make a mistake very often, when they use documentation for different Grafana version or type (e.g. latest where is more features, when they have in their older version or paid licensed features, which are not available for free).
              </div>

              <MdEditor 
                v-model="step3DocumentationLink"
                :theme="getCurrentTheme()" 
                language="en-US" 
                :toolbars="['code','preview']"
                :footers="[]" 
                previewTheme="github" 
                codeTheme="github"
                style="height: 20em;"
              >  
              </MdEditor>

              <v-divider :thickness="20" class="border-opacity-0"></v-divider>

              <br /><br />
              
              <v-btn color="info" @click="step = 3">Previous step</v-btn>
              &nbsp;
              <v-btn color="info" @click="step = 5">Next step</v-btn>
            </v-card-text>
          </v-card>
        </v-stepper-window-item>

        <v-stepper-window-item :value="5">
          <v-card title="Recommendations" flat>
            <v-card-text>
              See recommendations with their pros and cons.<br /><br />
              <div v-if="step1Type.toLowerCase().includes('licensed') && !step1Type.toLowerCase().includes('unlicensed')">
                You have Enteprise licensed Grafana, so you can contact Grafana Enterprise support.
                <br /><br />
                <v-table>
                  <thead>
                    <tr>
                      <th class="text-left">Pros</th>
                      <th class="text-left">Cons</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <v-list density="compact">
                          <v-list-item title="Official support" prepend-icon="mdi-check" />
                          <v-list-item title="Response with SLA" prepend-icon="mdi-check" />
                        </v-list>            
                      </td>
                      <td>
                        <v-list density="compact">
                          <v-list-item title="No instant response" prepend-icon="mdi-check" />
                        </v-list> 
                      </td>
                    </tr>
                  </tbody>
                </v-table>

                <v-btn color="info" :href="'mailto:support@grafana.com?subject='+step4Title+'&body='+getPrompt()+createSignature()">Email Grafana Enterprise support</v-btn>
              </div>

              <v-divider v-if="step1Type.toLowerCase().includes('licensed') && !step1Type.toLowerCase().includes('unlicensed')" class="ma-4"></v-divider>

              Try to talk to Grot (AI) - the chatbot has been trained with large language models (LLM) on Grafana Labs’ own content. 
              See <a target="_blank" href="https://grafana.com/blog/2023/10/12/ask-grot-how-were-building-a-chatbot-thats-actually-helpful-on-our-website/">blogpost</a> for more details.
              <br /><br />
              <v-table>
                <thead>
                  <tr>
                    <th class="text-left">Pros</th>
                    <th class="text-left">Cons</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <v-list density="compact">
                        <v-list-item title="Instant response" prepend-icon="mdi-check" />
                        <v-list-item title="Multilanguage support" prepend-icon="mdi-check" />
                      </v-list>            
                    </td>
                    <td>
                      <v-list density="compact">
                        <v-list-item title="Beta AI - anwers may be wrong" prepend-icon="mdi-check" />
                      </v-list> 
                    </td>
                  </tr>
                </tbody>
              </v-table>
              <br /><br />
              <v-btn color="info" @click="initialSendToGrot()">Try Grot (AI)</v-btn>
              <br />
              <!-- Grot chat -->
              <div v-if="grotShow">
                <v-container>
                  <v-row>
                    <v-col>
                      <div v-for="(item, index) in chat" :key="index" 
                          :class="['d-flex flex-row align-center my-2', item.from == 'user' ? 'justify-end': null]">
                        <span v-if="item.from == 'user'" class="rounded mr-3 bg-grey-darken-3">
                          <MdPreview
                            :modelValue="item.msg"
                            :theme="getCurrentTheme()" 
                            language="en-US" 
                            :toolbars="['code','preview']"
                            :footers="[]" 
                            previewTheme="github" 
                            codeTheme="github"
                          />
                        </span>
                        <v-avatar v-if="item.from == 'user'" :color="item.from == 'user' ? 'transparent': 'red'" size="36">
                          <v-icon icon="mdi-account-circle"></v-icon>
                        </v-avatar>
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
                          />
                        </span>
                      </div>
                    </v-col>
                  </v-row>
                  <v-row no-gutters>
                    <v-col>
                      <div class="d-flex flex-row align-center">
                        <v-text-field v-model="msg" placeholder="Write response to Grot" @keypress.enter="sendToGrot()"></v-text-field>
                        <v-btn 
                          icon 
                          class="ml-4" 
                          @click="sendToGrot()"
                          :loading="loading"
                        >
                          <v-icon>mdi-send</v-icon>
                        </v-btn>
                      </div>
                    </v-col>
                  </v-row>
                </v-container>
              </div>

              <v-divider class="ma-4"></v-divider>

              Search your problem on other pages. Someone else may have already solved the same problem.
              <br /><br />
              <v-table>
                <thead>
                  <tr>
                    <th class="text-left">Pros</th>
                    <th class="text-left">Cons</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <v-list density="compact">
                        <v-list-item title="Instant response if you find similar problem" prepend-icon="mdi-check" />
                      </v-list>            
                    </td>
                    <td>
                      <v-list density="compact">
                        <v-list-item title="It needs a search of other resources" prepend-icon="mdi-check" />
                        <v-list-item title="Not suitable for rare cases" prepend-icon="mdi-check" />
                      </v-list> 
                    </td>
                  </tr>
                </tbody>
              </v-table>
              
              <v-row>
                <v-col>
                  <v-btn color="info" @click="window.open('https://community.grafana.com/search?q='+encodeURIComponent(step4SearchQuery.replace('Grafana ', ''))+'%20order%3Alatest')">Search on Community Forum</v-btn>
                </v-col>
                <v-col>
                  <v-btn color="info" @click="window.open('https://stackoverflow.com/search?q=%5Bgrafana%5D+'+encodeURIComponent(step4SearchQuery).replace('Grafana ', ''))">Search on Stack Overflow</v-btn>                  
                </v-col>
                <v-col>
                  <v-btn color="info" @click="window.open('https://github.com/grafana/grafana/issues?q=is%3Aissue+'+encodeURIComponent(step4SearchQuery.replace('Grafana ', '')))">Search in Github Grafana issues</v-btn>                  
                </v-col>
                <v-col>
                  <v-btn color="info" @click="window.open('https://www.google.com/search?q='+encodeURIComponent(step4SearchQuery))">Search on Google</v-btn>
                </v-col>
                <v-col v-if="getPrompt().toLowerCase().includes('influx')">
                  <v-btn v-if="getPrompt().toLowerCase().includes('influx')" color="info" @click="window.open('https://community.influxdata.com/search?q='+encodeURIComponent(step4Title))">Search on Influx Community Forum</v-btn>
                </v-col>
              </v-row>
              
              <v-divider class="ma-4"></v-divider>

              Create a new topic on <a target="_blank" href="https://community.grafana.com/">Grafana community forum</a>. All already provided details will be prefilled in the new topic form, when you click on next button:
              <br /><br />
              <v-table>
                <thead>
                  <tr>
                    <th class="text-left">Pros</th>
                    <th class="text-left">Cons</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <v-list density="compact">
                        <v-list-item title="Response from community" prepend-icon="mdi-check" />
                      </v-list>            
                    </td>
                    <td>
                      <v-list density="compact">
                        <v-list-item title="No instant response" prepend-icon="mdi-check" />
                        <v-list-item title="Response is not guaranted" prepend-icon="mdi-check" />
                      </v-list> 
                    </td>
                  </tr>
                </tbody>
              </v-table>
              <v-btn color="info" @click="window.open('https://community.grafana.com/new-topic?title=' + encodeURIComponent(step4Title) + '&category=' + encodeURIComponent(step4Category) + '&tags=' + step4Tags + '&body=' + encodeURIComponent(getPrompt()+createSignature('markdown')))">Create community post</v-btn>

              <br /><br />
              <br /><br />
              
              <v-btn color="info" @click="step = 4">Previous step</v-btn>
            </v-card-text>
          </v-card>
        </v-stepper-window-item>

      </v-stepper-window>

    </v-stepper>
  </div>
</template>

<script setup>
import { MdEditor, MdPreview } from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';

</script>
<script>
import { useTheme } from 'vuetify'

//import { router } from '../router'
// import { useRouter } from 'vue-router'
// var router = useRouter()
// router.afterEach(() => {
//   this.setVariablesFromHash()
//   console.log('router.afterEach')
// });

export default {
  created() {
    window.addEventListener("resize", this.setMobile());
    this.setMobile();
    // test data prefill
    if (false) {
      this.step1Version = "v10.2.3";
      this.step1Type = "Enterprise (Free & unlicensed)";
      //this.step1Type = "Enterprise (Licensed)";
      this.step1Cloud = "false";
      this.step1Installation = "installed as container with orchestration";
      this.step1Os = "Linux";
      this.step1DeploymentDetails = "My docker-compose yaml file:\n```yaml\nversion: '3.8'\nservices:\n  grafana:\n    image: grafana/grafana-enterprise:latest\n    ports:\n      - 3000:3000\n    environment:\n      - GF_AUTH_ANONYMOUS_ENABLED=true\n      - GF_AUTH_ANONYMOUS_ORG_ROLE=Admin\n      - GF_AUTH_ANONYMOUS_ORG_NAME=Main Org.\n      - GF_AUTH_ANONYMOUS_ORG_ID=1\n    volumes:\n      - grafana-storage:/var/lib/grafana\nvolumes:\n  grafana-storage:\n```";
      this.step2WhatHappened  = "I don't see SAML login option in the login page.";
      this.step2WhatsExpected = "I expect to see SAML login option in the login page.";
      this.step2HowReproduce  = "1. Open Grafana login page.\n2. See that SAML login option is missing.";
      this.step2AdditionalDetails = "I have configured SAML authentication according to the documentation. I use Azure IDP.";
      this.step3DocumentationLink = "https://grafana.com/docs/grafana/latest/auth/saml/";
    }
    this.setVariablesFromHash();
  },
  data: () => ({
    step: 1,
    mobile: false,
    loading: false,
    theme: 'dark',
    step1Version: null,
    step1Type: null,
    step1Cloud: null,
    step1CloudProvider: null,
    step1Installation: null,
    step1Os: null,
    step1DeploymentDetails: "",
    step1DeploymentDetailsDescription: "Please provide more details about deployment",
    step2WhatHappened: "",
    step2WhatsExpected: "",
    step2HowReproduce: "",
    step2AdditionalDetails: "",
    step3DocumentationLink: "",
    step4Title: "",
    step4Category: "",
    step4SearchQuery: "",
    step4Tags: "",
    grotApplicationId: "06a226e5-ecb6-4193-8996-aab4460a15e0",
    grotConversationId: null,
    grotShow: false,
    chat: [],
    msg: "",
    inputVariables: ['step', 'step1Version', 'step1Type', 'step1Cloud', 'step1CloudProvider', 'step1Installation', 'step1Os', 'step1DeploymentDetails', 'step2WhatHappened', 'step2WhatsExpected', 'step2HowReproduce', 'step2AdditionalDetails', 'step3DocumentationLink', 'step4Title', 'step4Category', 'step4SearchQuery', 'step4Tags'],
  }),
  watch : {
    // $route() {
    //   this.setVariablesFromHash()
    // },
    step() {
      if (this.step == 5) {
        this.askGrotForSummary();
      }
      this.setHash();
    },
    installation() {
      if (this.step1Installation.toLowerCase().includes('simple')) {
        this.step1DeploymentDetailsDescription = "Please provide command how did you started simple Grafana container.";
      }
      if (this.step1Installation.toLowerCase().includes('package')) {
        this.step1DeploymentDetailsDescription = "Please provide more details how do you start your Grafana service.";
      }
      if (this.step1Installation.toLowerCase().includes('orchestration')) {
        this.step1DeploymentDetailsDescription = "Please provide more details about used orchestration configuration, e.g. Kubernetes (used container images, helm charts and their versions, how Grafana service is exposed), Docker Compose (docker-compose yaml file), AWS ECS (ECS task definition).";
      }
      if (this.step1Installation.toLowerCase().includes('source')) {
        this.step1DeploymentDetailsDescription = "Please provide more details how do you start your Grafana service.";
      }
    }
  },
  methods: {
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
    setHash() {
      var hash = ''
      for (var i = 0; i < this.inputVariables.length; i++) {
        var variable = this.inputVariables[i]
        if (this[variable] != null && this[variable] != "") {
          hash = hash + "&" + variable + "=" + encodeURIComponent(this[variable])
        }
      }
      window.location.hash = hash.substring(1)
    },
    createSignature(format) {
      if (format=='markdown') {
        return '\n\nProblem debugged with [Grafana Debugger](' + window.location.href +')';
      }
      return '\n\nProblem debugged with Grafana Debugger: ' + window.location.href;
    },
    setVariablesFromHash() {
      var hash = window.location.hash.substring(1)
      var variables = hash.split("&")
      for (var i = 0; i < variables.length; i++) {
        var variable = variables[i]
        var parts = variable.split("=")
        if (parts.length == 2) {
          this[parts[0]] = decodeURIComponent(parts[1])
        }
      }
    },
    sendToGrot() {
      if (this.msg == null || this.msg == "") {
        return
      }
      this.loading = true
      this.askGrot(this.msg)
      this.msg = null
    },
    initialSendToGrot() {
      this.chat = []
      this.grotConversationId = null
      this.loading = true
      this.askGrot("I have a problem. \n\n" + this.getPrompt())
      this.grotShow = true
    },
    askGrotForSummary() {
      var url = `https://api.pal.ai/v1/conversations`;
      var data = {
        "applicationId": this.grotApplicationId,
        "conversationId": null,
        "messageContent": "Please suggest title and category and tags and search query for my problem, but don't use 'Enterprise' or 'Open Source' words and Grafana version there and don't use quotes. I have a problem. " + this.getPrompt(),
        "isStreaming": false
      };
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      .then(response => response.json())
      .then(data => {
        console.log("Grot problem summary: " + data.messages[data.messages.length - 1].content);
        var msg = data.messages[data.messages.length - 1].content;
        var lines = msg.split("\n");
        for (var i = 0; i < lines.length; i++) {
          var line = lines[i];
          if (line.startsWith("Title: ")) {
            this.step4Title = line.substring(7);
          }
          if (line.startsWith("Category: ")) {
            this.step4Category = line.substring(10);
          }
          if (line.startsWith("Search Query: ")) {
            this.step4SearchQuery = line.substring(14).replace("Enteprise ", "").replace("Open Source ", "");
          }
          if (line.startsWith("Tags: ")) {
            this.step4Tags = line.substring(6).replace(" ","").toLowerCase();
          }
        }
        this.setHash();
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    },
    askGrot(message) {
      var url = `https://api.pal.ai/v1/conversations`;
      var data = {
        "applicationId": this.grotApplicationId,
        "conversationId": this.grotConversationId,
        "messageContent": message,
        "isStreaming": false,
        "role": "system"
      };
      this.chat.push({from: 'user', msg: data.messageContent});
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
        this.chat.push({from: 'grot', msg: data.messages[data.messages.length - 1].content});
        this.loading = false
      })
      .catch((error) => {
        console.error('Error:', error);
        this.chat.push({from: 'grot', msg: "Error during communication with Grot: " + error});
        this.loading = false
      });
    },
    getCurrentTheme() {
      const theme = useTheme()
      return theme.global.current.value.dark ? 'dark' : 'light'
    },
    getPrompt() {
      var deployment;
      if (this.step1Cloud == 'true') {
        deployment = `It is managed by ${this.step1CloudProvider}`;
      }
      if (this.step1Cloud == 'false') {
        deployment = `It is on-premise (selfhosted) Grafana, ${this.step1Installation} on ${this.step1Os}.`;
      }
      var msg = `### Deployment:\nI have Grafana ${this.step1Type} ${this.step1Version}. ${deployment}`
      if (this.step1DeploymentDetails!="") {
        msg = msg + "\n\n### Deployment details:\n" + this.step1DeploymentDetails;
      }
      if (this.step2WhatHappened!="") {
        msg = msg + "\n\n### Problem, which happened:\n" + this.step2WhatHappened;
      }
      if (this.step2WhatsExpected!="") {
        msg = msg + "\n\n### What I expected:\n" + this.step2WhatsExpected;
      }
      if (this.step2HowReproduce!="") {
        msg = msg + "\n\n### How to reproduce it:\n" + this.step2HowReproduce;
      }
      if (this.step2AdditionalDetails!="") {
        msg = msg + "\n\n### Additional problem details:\n" + this.step2AdditionalDetails;
      }
      if (this.step3DocumentationLink!="") {
        msg = msg + "\n\n### I followed this documentation link(s):\n" + this.step3DocumentationLink;
      }
      return msg;
    }
  },
}
</script>

<style>
.v-stepper-header {
  box-shadow: none !important;
}
.v-stepper-window {
  margin-top: 0 !important;
}
.mdi-bug {
  background: -webkit-linear-gradient(#f05a28, #fbc90b);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.v-table .v-table__wrapper > table > thead > tr > th {
  border-bottom: 0 !important
}
.md-editor-preview-wrapper {
  padding-left: 1em;
  padding-right: 1em;
  padding-top: 1em;
  padding-bottom: 0;
  width: 100%;
}
</style>
