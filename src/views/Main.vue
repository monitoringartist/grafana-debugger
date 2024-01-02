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
              Grafana Debugger provides a structured guide on resolving issues with Grafana, covering aspects such as configuration, visualization creation, and queries.
              <br /><br />
              A notable 73% of Grafana Debugger users swiftly identified their issues and find further resources with this tool immediately. Others are able to create community posts, 
              which will have much higher chance to attracts the attention of Grafana community members, because it contains all details required for quick problem assesment.
              All debugging steps are based on long term experience of Grafana community members and on regular communication with Grafana Enterprise support engineers.
              <br /><br />
              <v-btn color="info" @click="setDefault()">Start new debugging</v-btn>

              <v-divider class="ma-4 mt-8"></v-divider>

              Examples of Debugged Issues - try Grafana Debugger on real issues with prefilled data:
              <br /><br />
              <v-row>
                <v-col>
                  <a class="text-decoration-none" href="#(step:'2',step2Cloud:false,step2DeploymentDetails:'My docker-compose yaml file%3A%0A```yaml%0Aversion%3A !'3.8!'%0Aservices%3A%0A%20 grafana%3A%0A%20%20%20 image%3A grafana%2Fgrafana-enterprise%3Alatest%0A%20%20%20 ports%3A%0A%20%20%20%20%20 - 3000%3A3000%0A%20%20%20 environment%3A%0A%20%20%20%20%20 - GF_AUTH_ANONYMOUS_ENABLED%3Dtrue%0A%20%20%20%20%20 - GF_AUTH_ANONYMOUS_ORG_ROLE%3DAdmin%0A%20%20%20%20%20 - GF_AUTH_ANONYMOUS_ORG_NAME%3DMain Org.%0A%20%20%20%20%20 - GF_AUTH_ANONYMOUS_ORG_ID%3D1%0A%20%20%20 volumes%3A%0A%20%20%20%20%20 - grafana-storage%3A%2Fvar%2Flib%2Fgrafana%0Avolumes%3A%0A%20 grafana-storage%3A%0A```',step2Installation:installed as simple container,step2Os:Linux,step2Type:'Enterprise (Free %26 unlicensed)',step2Version:v10.2.3,step3AdditionalDetails:I have configured SAML authentication according to the documentation. I use Azure IDP.,step3HowReproduce:'1. Open Grafana login page.%0A2. See that SAML login option is missing.',step3WhatHappened:'I don!'t see SAML login option in the login page.',step3WhatsExpected:I expect to see SAML login option in the login page.,step4DocumentationLink:https%3A%2F%2Fgrafana.com%2Fdocs%2Fgrafana%2Flatest%2Fauth%2Fsaml%2F,step5Category:Authentication%2FIdentity Management,step5SearchQuery:Grafana SAML login option missing,step5Tags:grafana%2Csaml%2C login%2C authentication%2C azure idp,step5Title:SAML login option missing in Grafana login page)">
                    <v-btn color="secondary">SAML login</v-btn>
                  </a>
                </v-col>
                <v-col>
                  <a class="text-decoration-none" href="#(step:'2',step2Cloud:false,step2DeploymentDetails:My%20%60start-grafana.sh%60%20script%3A%0A%60%60%60sh%0Adocker%20rm%20-f%20grafana%20%7C%7C%20true%0A%0Adocker%20run%20-d%20%5C%0A%20%20--name%20grafana%20%5C%0A%20%20-p%2080%3A80%20%5C%0A%20%20grafana%2Fgrafana%3Alatest%0A%60%60%60,step2Installation:installed%20as%20simple%20container,step2Os:Linux,step2Type:Open%20Source,step2Version:v8.2.3,step3AdditionalDetails:I%20tried%20Firefox%2C%20Chrome%2C%20Edge.%20All%20of%20them%20have%20the%20same%20problem.,step3HowReproduce:'1.%20Run%20%60start-grafana.sh%60%20script%0A2.%20Try%20to%20open%20http%3A%2F%2Flocalhost%20in%20the%20browser',step3WhatHappened:'I%20can!'t%20open%20Grafana%20on%20http%3A%2F%2Flocalhost',step3WhatsExpected:I%20can%20see%20Grafana%20on%20http%3A%2F%2Flocalhost,step4DocumentationLink:https%3A%2F%2Fgrafana.com%2Fdocs%2Fgrafana%2Flatest%2Fsetup-grafana%2Finstallation%2Fdocker%2F,step5Category:Grafana%20Troubleshooting,step5SearchQuery:Grafana%20Docker%20deployment%20access%20issue,step5Tags:grafana%2Cdeployment%2C%20docker%2C%20access%20issue%2C%20documentation,step5Title:Unable%20to%20Access%20Grafana%20after%20Deployment)">
                    <v-btn color="secondary">Unavailable Grafana</v-btn>
                  </a>
                </v-col>
                <v-col>
                  <a class="text-decoration-none" href="#(step:'2',step2Cloud:false,step2DeploymentDetails:My%20%60start-grafana.sh%60%20script%3A%0A%60%60%60sh%0Adocker%20rm%20-f%20grafana%20%7C%7C%20true%0A%0Adocker%20run%20-d%20%5C%0A%20%20--name%20grafana%20%5C%0A%20%20-p%2080%3A80%20%5C%0A%20%20grafana%2Fgrafana%3Alatest%0A%60%60%60,step2Installation:installed%20as%20simple%20container,step2Os:Linux,step2Type:Open%20Source,step2Version:v8.2.3,step3AdditionalDetails:I%20tried%20Firefox%2C%20Chrome%2C%20Edge.%20All%20of%20them%20have%20the%20same%20problem.,step3HowReproduce:'1.%20Run%20%60start-grafana.sh%60%20script%0A2.%20Try%20to%20open%20http%3A%2F%2Flocalhost%20in%20the%20browser',step3WhatHappened:'I%20can!'t%20open%20Grafana%20on%20http%3A%2F%2Flocalhost',step3WhatsExpected:I%20can%20see%20Grafana%20on%20http%3A%2F%2Flocalhost,step4DocumentationLink:https%3A%2F%2Fgrafana.com%2Fdocs%2Fgrafana%2Flatest%2Fsetup-grafana%2Finstallation%2Fdocker%2F,step5Category:Grafana%20Troubleshooting,step5SearchQuery:Grafana%20Docker%20deployment%20access%20issue,step5Tags:grafana%2Cdeployment%2C%20docker%2C%20access%20issue%2C%20documentation,step5Title:Unable%20to%20Access%20Grafana%20after%20Deployment)">
                    <v-btn color="secondary">PromQL query</v-btn>
                  </a>
                </v-col>
                <v-col>
                  <a class="text-decoration-none" href="#(step:'2',step2Cloud:false,step2DeploymentDetails:My%20%60start-grafana.sh%60%20script%3A%0A%60%60%60sh%0Adocker%20rm%20-f%20grafana%20%7C%7C%20true%0A%0Adocker%20run%20-d%20%5C%0A%20%20--name%20grafana%20%5C%0A%20%20-p%2080%3A80%20%5C%0A%20%20grafana%2Fgrafana%3Alatest%0A%60%60%60,step2Installation:installed%20as%20simple%20container,step2Os:Linux,step2Type:Open%20Source,step2Version:v8.2.3,step3AdditionalDetails:I%20tried%20Firefox%2C%20Chrome%2C%20Edge.%20All%20of%20them%20have%20the%20same%20problem.,step3HowReproduce:'1.%20Run%20%60start-grafana.sh%60%20script%0A2.%20Try%20to%20open%20http%3A%2F%2Flocalhost%20in%20the%20browser',step3WhatHappened:'I%20can!'t%20open%20Grafana%20on%20http%3A%2F%2Flocalhost',step3WhatsExpected:I%20can%20see%20Grafana%20on%20http%3A%2F%2Flocalhost,step4DocumentationLink:https%3A%2F%2Fgrafana.com%2Fdocs%2Fgrafana%2Flatest%2Fsetup-grafana%2Finstallation%2Fdocker%2F,step5Category:Grafana%20Troubleshooting,step5SearchQuery:Grafana%20Docker%20deployment%20access%20issue,step5Tags:grafana%2Cdeployment%2C%20docker%2C%20access%20issue%2C%20documentation,step5Title:Unable%20to%20Access%20Grafana%20after%20Deployment)">
                    <v-btn color="secondary">Loki query</v-btn>
                  </a>
                </v-col>
                <v-col>
                  <a class="text-decoration-none" href="#(step:'2',step2Cloud:false,step2DeploymentDetails:My%20%60start-grafana.sh%60%20script%3A%0A%60%60%60sh%0Adocker%20rm%20-f%20grafana%20%7C%7C%20true%0A%0Adocker%20run%20-d%20%5C%0A%20%20--name%20grafana%20%5C%0A%20%20-p%2080%3A80%20%5C%0A%20%20grafana%2Fgrafana%3Alatest%0A%60%60%60,step2Installation:installed%20as%20simple%20container,step2Os:Linux,step2Type:Open%20Source,step2Version:v8.2.3,step3AdditionalDetails:I%20tried%20Firefox%2C%20Chrome%2C%20Edge.%20All%20of%20them%20have%20the%20same%20problem.,step3HowReproduce:'1.%20Run%20%60start-grafana.sh%60%20script%0A2.%20Try%20to%20open%20http%3A%2F%2Flocalhost%20in%20the%20browser',step3WhatHappened:'I%20can!'t%20open%20Grafana%20on%20http%3A%2F%2Flocalhost',step3WhatsExpected:I%20can%20see%20Grafana%20on%20http%3A%2F%2Flocalhost,step4DocumentationLink:https%3A%2F%2Fgrafana.com%2Fdocs%2Fgrafana%2Flatest%2Fsetup-grafana%2Finstallation%2Fdocker%2F,step5Category:Grafana%20Troubleshooting,step5SearchQuery:Grafana%20Docker%20deployment%20access%20issue,step5Tags:grafana%2Cdeployment%2C%20docker%2C%20access%20issue%2C%20documentation,step5Title:Unable%20to%20Access%20Grafana%20after%20Deployment)">
                    <v-btn color="secondary">InfluxDB query</v-btn>
                  </a>
                </v-col>
                <v-col>
                  <a class="text-decoration-none" href="#(step:'2',step2Cloud:false,step2DeploymentDetails:My%20%60start-grafana.sh%60%20script%3A%0A%60%60%60sh%0Adocker%20rm%20-f%20grafana%20%7C%7C%20true%0A%0Adocker%20run%20-d%20%5C%0A%20%20--name%20grafana%20%5C%0A%20%20-p%2080%3A80%20%5C%0A%20%20grafana%2Fgrafana%3Alatest%0A%60%60%60,step2Installation:installed%20as%20simple%20container,step2Os:Linux,step2Type:Open%20Source,step2Version:v8.2.3,step3AdditionalDetails:I%20tried%20Firefox%2C%20Chrome%2C%20Edge.%20All%20of%20them%20have%20the%20same%20problem.,step3HowReproduce:'1.%20Run%20%60start-grafana.sh%60%20script%0A2.%20Try%20to%20open%20http%3A%2F%2Flocalhost%20in%20the%20browser',step3WhatHappened:'I%20can!'t%20open%20Grafana%20on%20http%3A%2F%2Flocalhost',step3WhatsExpected:I%20can%20see%20Grafana%20on%20http%3A%2F%2Flocalhost,step4DocumentationLink:https%3A%2F%2Fgrafana.com%2Fdocs%2Fgrafana%2Flatest%2Fsetup-grafana%2Finstallation%2Fdocker%2F,step5Category:Grafana%20Troubleshooting,step5SearchQuery:Grafana%20Docker%20deployment%20access%20issue,step5Tags:grafana%2Cdeployment%2C%20docker%2C%20access%20issue%2C%20documentation,step5Title:Unable%20to%20Access%20Grafana%20after%20Deployment)">
                    <v-btn color="secondary">CloudWatch query</v-btn>
                  </a>
                </v-col>
              </v-row>
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
                  v-model="step2Version"
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
                  v-model="step2Type"
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
                v-model="step2Cloud"
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

              <h3 v-if="step2Cloud == 'true'">
                Which cloud provider do you use?
              </h3>

              <v-chip-group
                v-if="step2Cloud == 'true'"
                v-model="step2CloudProvider"
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

              <h3 v-if="step2Cloud == 'false'">
                How did you deploy/install your on-premise Grafana instance?
              </h3>

              <v-chip-group
                v-if="step2Cloud == 'false'"
                v-model="step2Installation"
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

              <v-divider v-if="step2Cloud == 'false'" :thickness="20" class="border-opacity-0"></v-divider>

              <h3 v-if="step2Cloud == 'false'">
                Which operating system do you use to run on-premise Grafana?
              </h3>

              <v-chip-group
                v-if="step2Cloud == 'false'"
                v-model="step2Os"
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

              <v-divider v-if="step2Cloud == 'false'" :thickness="20" class="border-opacity-0"></v-divider>

              <h3 v-if="step2Cloud == 'false'">
                Details about your on-premise Grafana deployment:
              </h3>
              <div v-if="step2Cloud == 'false'">
                {{ step2DeploymentDetailsDescription }} Please use 3 backticks (```) to format your commands or configuration files for readability. Markdown formatting is supported.
              </div>

              <MdEditor v-if="step2Cloud == 'false'" 
                v-model="step2DeploymentDetails" 
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
                Please use 3 backticks (```) to format your logs, commands or configuration files for readability. Markdown formatting is supported.
              </div>

              <MdEditor 
                v-model="step3WhatHappened" 
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
                Please use 3 backticks (```) to format your logs, commands or configuration files for readability. Markdown formatting is supported.
              </div>

              <MdEditor 
                v-model="step3WhatsExpected" 
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
                Please provide a steps. Please use 3 backticks (```) to format your logs, commands or configuration files for readability. Markdown formatting is supported.
              </div>

              <MdEditor 
                v-model="step3HowReproduce" 
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
                Please provide more details, which can be usefull. Did it work before? If it worked before, what Grafana version worked correctly? Provide more details about plugin (name, version, installation method) if problem is related to plugin. Please use 3 backticks (```) to format your logs, commands or configuration files for readability. Markdown formatting is supported.
              </div>

              <MdEditor 
                v-model="step3AdditionalDetails" 
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
                Documentation link(s)
              </h3>
              <div>
                Please provide a link(s) to documentation, which you have used to configure Grafana. Make sure that you have used documentation applicable for your Grafana version and type - {{ step2Type }} {{ step2Version }}.
                Users make a mistake very often, when they use documentation for different Grafana version or type (e.g. latest where is more features, when they have in their older version or paid licensed features, which are not available for free).
              </div>

              <MdEditor 
                v-model="step4DocumentationLink"
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
              <div v-if="step2Type.toLowerCase().includes('licensed') && !step2Type.toLowerCase().includes('unlicensed')">
                You have Enteprise licensed Grafana, so you can contact Grafana Enterprise support. Make sure that you are using email address, which is associated with your Grafana Cloud account.
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

                <v-btn color="info" :href="'mailto:support@grafana.com?subject='+step5Title+'&body='+getPrompt()+createSignature()">Email Grafana Enterprise support</v-btn>

                <!-- <v-btn color="info" :href="'mailto:support@grafana.com?subject='+step5Title+'&body='+getPrompt()+createSignature()">22 Email Grafana Enterprise support</v-btn> -->

              </div>

              <v-divider v-if="step2Type.toLowerCase().includes('licensed') && !step2Type.toLowerCase().includes('unlicensed')" class="ma-4"></v-divider>

              Try to talk to Grot (AI) - the chatbot has been trained with large language models on Grafana Labs’ own content. 
              See <a class="text-decoration-none" target="_blank" href="https://grafana.com/blog/2023/10/12/ask-grot-how-were-building-a-chatbot-thats-actually-helpful-on-our-website/">blogpost</a> for more details.
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
                        <v-text-field v-model="msg" clearable placeholder="Discuss with Grot" @keypress.enter="sendToGrot()"></v-text-field>
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
                  <v-btn color="info" @click="window.open('https://community.grafana.com/search?q='+encodeURI(step5SearchQuery.replace('Grafana ', ''))+'%20order%3Alatest')">Search on Community Forum</v-btn>
                </v-col>
                <v-col>
                  <v-btn color="info" @click="window.open('https://stackoverflow.com/search?q=%5Bgrafana%5D+'+encodeURI(step5SearchQuery).replace('Grafana ', ''))">Search on Stack Overflow</v-btn>                  
                </v-col>
                <v-col>
                  <v-btn color="info" @click="window.open('https://github.com/grafana/grafana/issues?q=is%3Aissue+'+encodeURI(step5SearchQuery.replace('Grafana ', '')))">Search in Github Grafana issues</v-btn>                  
                </v-col>
                <v-col>
                  <v-btn color="info" @click="window.open('https://www.google.com/search?q='+encodeURI(step5SearchQuery))">Search on Google</v-btn>
                </v-col>
                <v-col v-if="getPrompt().toLowerCase().includes('influx')">
                  <v-btn v-if="getPrompt().toLowerCase().includes('influx')" color="info" @click="window.open('https://community.influxdata.com/search?q='+encodeURI(step5Title))">Search on InfluxData Forum</v-btn>
                </v-col>
              </v-row>
              
              <v-divider class="ma-4"></v-divider>

              Create a new topic on <a class="text-decoration-none" target="_blank" href="https://community.grafana.com/">Grafana community forum</a>. All already provided details will be prefilled in the new topic form, when you click on next button:
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
              <v-btn color="info" @click="window.open('https://community.grafana.com/new-topic?title=' + encodeURIComponent(step5Title) + '&category=' + encodeURI(step5Category) + '&tags=' + step5Tags + '&body=' + encodeURIComponent(getPrompt()+createSignature('markdown')))">Create community post</v-btn>

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
import { MdEditor, MdPreview } from 'md-editor-v3'
import 'md-editor-v3/lib/style.css'

</script>
<script>
import { useTheme } from 'vuetify'
import rison from 'rison-node'
import { event } from 'vue-gtag'

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = SpeechRecognition ? new SpeechRecognition() : false;

export default {
  mounted() {
    this.setVariablesFromHash();
    //required workaround
    this.step++;
    this.step--;
  },
  created() {
    window.addEventListener("resize", this.setMobile())
    this.setMobile()
  },
  data: () => ({
    lang: "en_US",
    error: false,
    speaking: false,
    toggle: false,
    micIcon: "mdi-microphone",
    step: 1,
    mobile: false,
    loading: false,
    theme: 'dark',
    step2Version: null,
    step2Type: null,
    step2Cloud: null,
    step2CloudProvider: null,
    step2Installation: null,
    step2Os: null,
    step2DeploymentDetails: "",
    step2DeploymentDetailsDescription: "Please provide more details about deployment. ",
    step3WhatHappened: "",
    step3WhatsExpected: "",
    step3HowReproduce: "",
    step3AdditionalDetails: "",
    step4DocumentationLink: "",
    step5Title: "",
    step5Category: "",
    step5SearchQuery: "",
    step5Tags: "",
    grotApplicationId: "06a226e5-ecb6-4193-8996-aab4460a15e0",
    grotConversationId: null,
    grotShow: false,
    chat: [],
    msg: "",
    inputVariables: ['step2Version', 'step2Type', 'step2Cloud', 'step2CloudProvider', 'step2Installation', 'step2Os', 'step2DeploymentDetails', 'step3WhatHappened', 'step3WhatsExpected', 'step3HowReproduce', 'step3AdditionalDetails', 'step4DocumentationLink', 'step5Title', 'step5Category', 'step5SearchQuery', 'step5Tags', 'step'],
  }),
  watch : {
    msg: function (val) {
      if (val == null || val.trim().replace(/\.$/, '').trim() == "") {
        this.msg = ""
        return
      } else {
        if (this.loading) {
          return
        } else {
          var tmp = val.toLowerCase().replace(/\.$/, '').trim()
          if (tmp.endsWith('send') | tmp.endsWith('sent')) {
            this.msg = this.msg.split(" ").slice(0, -1).join(" ")
            this.sendToGrot()
          } 
        }
      }
    },
    $route() {
      this.setVariablesFromHash()
      //required workaround
      this.step++;
      this.step--;
    },
    step() {
      if (this.step == 5) {
        this.grotShow = false
        this.askGrotForSummary();
      }
      this.setHash();
      event('step', {
        'event-label': this.step,
        value: 1
      })
    },
    step2Installation() {
      if (this.step2Installation && this.step2Installation.toLowerCase().includes('simple')) {
        this.step2DeploymentDetailsDescription = "Please provide command how did you started simple Grafana container.";
      }
      if (this.step2Installation && this.step2Installation.toLowerCase().includes('package')) {
        this.step2DeploymentDetailsDescription = "Please provide more details how do you start your Grafana service.";
      }
      if (this.step2Installation && this.step2Installation.toLowerCase().includes('orchestration')) {
        this.step2DeploymentDetailsDescription = "Please provide more details about used orchestration configuration, e.g. Kubernetes (used container images, helm charts and their versions, how Grafana service is exposed), Docker Compose (docker-compose yaml file), AWS ECS (ECS task definition).";
      }
      if (this.step2Installation && this.step2Installation.toLowerCase().includes('source')) {
        this.step2DeploymentDetailsDescription = "Please provide more details how do you start your Grafana service.";
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
    setDefault() {
      this.step2Version = null
      this.step2Type = null
      this.step2Cloud = null
      this.step2CloudProvider = null
      this.step2Installation = null
      this.step2Os = null
      this.step2DeploymentDetails = ""
      this.step2DeploymentDetailsDescription = "Please provide more details about deployment. "
      this.step3WhatHappened = ""
      this.step3WhatsExpected = ""
      this.step3HowReproduce = ""
      this.step3AdditionalDetails = ""
      this.step4DocumentationLink = ""
      this.step5Title = ""
      this.step5Category = ""
      this.step5SearchQuery = ""
      this.step5Tags = ""
      this.step = 2
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
    setHash() {
      var obj = {}
      for (var i = 0; i < this.inputVariables.length; i++) {
        var variable = this.inputVariables[i]
        if (this[variable] != null && this[variable] != "") {
          obj[variable] = encodeURIComponent(this[variable]);
        }
      }
      window.location.hash = rison.encode(obj)
    },
    setVariablesFromHash() {
      var hash = window.location.hash.substring(1)
      var obj = {}
      if (hash != null && hash != "") {
        obj = rison.decode(hash);
      }
      for (var variable in obj) {
        this[variable] = decodeURIComponent(obj[variable]);
      }
    },
    createSignature(format) {
      if (format=='markdown') {
        return '\n\nProblem debugged with [Grafana Debugger](' + window.location.href +')';
      }
      return '\n\nProblem debugged with Grafana Debugger: ' + window.location.href;
    },
    sendToGrot() {
      if (this.msg == null || this.msg == "") {
        return
      }
      this.loading = true
      this.askGrot(this.msg)
      this.msg = ""
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
        "messageContent": "Please suggest title and category (one term from this list: Installation, Configuration, Authentication, Alerting, Dashboards, Data Links, Live, Explore, Bar Gauge Panel, Bar Chart Panel, Gauge Panel, Geomap Panel, Pie Chart Panel, Stat Panel, Table Panel, Time Series Panel, Prometheus, InfluxDB, Elasticsearch, MySQL, PostgreSQL, MSSQL, Cloudwatch, Graphite, Azure Monitor, Zabbix, Developers & API, Grafana Agent) and tags and search query for my problem, but don't use 'Enterprise' or 'Open Source' words and Grafana version there and don't use quotes. I have a problem. " + this.getPrompt(),
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
        var msg = data.messages[data.messages.length - 1].content;
        var lines = msg.split("\n");
        for (var i = 0; i < lines.length; i++) {
          var line = lines[i];
          if (line.startsWith("Title: ")) {
            this.step5Title = line.substring(7);
          }
          if (line.startsWith("Category: ")) {
            this.step5Category = line.substring(10);
          }
          if (line.startsWith("Search Query: ")) {
            this.step5SearchQuery = line.substring(14).replace("Enteprise ", "").replace("Open Source ", "");
          }
          if (line.startsWith("Tags: ")) {
            this.step5Tags = line.substring(6).replace(" ","").toLowerCase();
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
    },
    getPrompt() {
      var deployment;
      if (this.step2Cloud == 'true') {
        deployment = `It is managed by ${this.step2CloudProvider}`;
      }
      if (this.step2Cloud == 'false') {
        deployment = `It is on-premise (selfhosted) Grafana, ${this.step2Installation} on ${this.step2Os}.`;
      }
      if (this.step2Type == null) {
        this.step2Type = ''
      }
      if (this.step2Version == null) {
        this.step2Version = ''
      }
      if (deployment == null) {
        deployment = ''
      }
      var msg = `### Deployment:\nI have Grafana ${this.step2Type} ${this.step2Version}. ${deployment}`
      if (this.step2DeploymentDetails!="") {
        msg = msg + "\n\n### Deployment details:\n" + this.step2DeploymentDetails;
      }
      if (this.step3WhatHappened!="") {
        msg = msg + "\n\n### Problem, which happened:\n" + this.step3WhatHappened;
      }
      if (this.step3WhatsExpected!="") {
        msg = msg + "\n\n### What I expected:\n" + this.step3WhatsExpected;
      }
      if (this.step3HowReproduce!="") {
        msg = msg + "\n\n### How to reproduce it:\n" + this.step3HowReproduce;
      }
      if (this.step3AdditionalDetails!="") {
        msg = msg + "\n\n### Additional problem details:\n" + this.step3AdditionalDetails;
      }
      if (this.step4DocumentationLink!="") {
        msg = msg + "\n\n### I followed this documentation link(s):\n" + this.step4DocumentationLink;
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
.md-editor-preview-wrapper p {
  word-break: normal;
}
</style>

<style lang="less">
@import '../assets/styles/md.less';
</style>
