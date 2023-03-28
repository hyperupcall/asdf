import{_ as n,r as l,o as i,c as d,a as e,b as t,d as s,e as a}from"./app.08d28afd.js";const c={},r=a(`<h1 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration" aria-hidden="true">#</a> Configuration</h1><p>Configuration of <code>asdf</code> encompasses both the sharable <code>.tool-versions</code> files as well as user specific customisations with <code>.asdfrc</code> and Environment Variables.</p><h2 id="tool-versions" tabindex="-1"><a class="header-anchor" href="#tool-versions" aria-hidden="true">#</a> <code>.tool-versions</code></h2><p>Whenever <code>.tool-versions</code> file is present in a directory, the tool versions it declares will be used in that directory and any subdirectories.</p><div class="custom-container warning"><p class="custom-container-title">Note</p><p>Global defaults can be set in the file <code>$HOME/.tool-versions</code></p></div><p>This is what a <code>.tool-versions</code> file looks like:</p><div class="language-text" data-ext="text"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">ruby 2.5.3</span></span>
<span class="line"><span style="color:#F8F8F2;">nodejs 10.15.0</span></span>
<span class="line"><span style="color:#F8F8F2;"></span></span></code></pre></div><p>You can also include comments:</p><div class="language-text" data-ext="text"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">ruby 2.5.3 # This is a comment</span></span>
<span class="line"><span style="color:#F8F8F2;"># This is another comment</span></span>
<span class="line"><span style="color:#F8F8F2;">nodejs 10.15.0</span></span>
<span class="line"><span style="color:#F8F8F2;"></span></span></code></pre></div><p>The versions can be in the following format:</p><ul><li><code>10.15.0</code> - an actual version. Plugins that support downloading binaries, will download binaries.</li><li><code>ref:v1.0.2-a</code> or <code>ref:39cb398vb39</code> - tag/commit/branch to download from github and compile</li><li><code>path:~/src/elixir</code> - a path to custom compiled version of a tool to use. For use by language developers and such.</li><li><code>system</code> - this keyword causes asdf to passthrough to the version of the tool on the system that is not managed by asdf.</li></ul><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Multiple versions can be set by separating them with a space. For example, to use Python <code>3.7.2</code>, fallback to Python <code>2.7.15</code> and finally to the <code>system</code> Python, the following line can be added to <code>.tool-versions</code>.</p><div class="language-text" data-ext="text"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">python 3.7.2 2.7.15 system</span></span>
<span class="line"><span style="color:#F8F8F2;"></span></span></code></pre></div></div><p>To install all the tools defined in a <code>.tool-versions</code> file run <code>asdf install</code> with no other arguments in the directory containing the <code>.tool-versions</code> file.</p><p>To install a single tool defined in a <code>.tool-versions</code> file run <code>asdf install &lt;name&gt;</code> in the directory containing the <code>.tool-versions</code> file. The tool will be installed at the version specified in the <code>.tool-versions</code> file.</p><p>Edit the file directly or use <code>asdf local</code> (or <code>asdf global</code>) which updates it.</p><h2 id="asdfrc" tabindex="-1"><a class="header-anchor" href="#asdfrc" aria-hidden="true">#</a> <code>.asdfrc</code></h2><p>The <code>.asdfrc</code> file defines the user&#39;s machine specific configuration.</p><p><code>\${HOME}/.asdfrc</code> is the default location used by asdf. This can be set with the <a href="#asdfconfigfile">Environment Variable <code>ASDF_CONFIG_FILE</code></a>.</p><p>The below file shows the required format with the default values:</p><div class="language-text" data-ext="text"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;"># See the docs for explanations: https://asdf-vm.com/manage/configuration.html</span></span>
<span class="line"><span style="color:#F8F8F2;"></span></span>
<span class="line"><span style="color:#F8F8F2;">legacy_version_file = no</span></span>
<span class="line"><span style="color:#F8F8F2;">use_release_candidates = no</span></span>
<span class="line"><span style="color:#F8F8F2;">always_keep_download = no</span></span>
<span class="line"><span style="color:#F8F8F2;">plugin_repository_last_check_duration = 60</span></span>
<span class="line"><span style="color:#F8F8F2;">disable_plugin_short_name_repository = no</span></span>
<span class="line"><span style="color:#F8F8F2;"></span></span></code></pre></div><h3 id="legacy-version-file" tabindex="-1"><a class="header-anchor" href="#legacy-version-file" aria-hidden="true">#</a> <code>legacy_version_file</code></h3><p>Plugins <strong>with support</strong> can read the versions files used by other version managers, for example, <code>.ruby-version</code> in the case of Ruby&#39;s <code>rbenv</code>.</p>`,22),h=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"Options"),e("th",{style:{"text-align":"left"}},"Description")])],-1),p={style:{"text-align":"left"}},u=e("code",null,"no",-1),f=e("td",{style:{"text-align":"left"}},[t("Use "),e("code",null,".tool-versions"),t(" to read versions")],-1),g=e("tr",null,[e("td",{style:{"text-align":"left"}},[e("code",null,"yes")]),e("td",{style:{"text-align":"left"}},[t("Use plugin fallback to legacy version files ("),e("code",null,".ruby-version"),t(") if available")])],-1),y=e("h3",{id:"use-release-candidates",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#use-release-candidates","aria-hidden":"true"},"#"),t(),e("code",null,"use_release_candidates")],-1),_=e("p",null,[t("Configure the "),e("code",null,"asdf update"),t(" command to upgrade to the latest Release Candidate instead of the latest Semantic Version.")],-1),m=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"Options"),e("th",{style:{"text-align":"left"}},"Description")])],-1),b={style:{"text-align":"left"}},v=e("code",null,"no",-1),x=e("td",{style:{"text-align":"left"}},"Semantic Version is used",-1),F=e("tr",null,[e("td",{style:{"text-align":"left"}},[e("code",null,"yes")]),e("td",{style:{"text-align":"left"}},"Release Candidate is used")],-1),w=e("h3",{id:"always-keep-download",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#always-keep-download","aria-hidden":"true"},"#"),t(),e("code",null,"always_keep_download")],-1),D=e("p",null,[t("Configure the "),e("code",null,"asdf install"),t(" command to keep or delete the source code or binary it downloads.")],-1),k=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"Options"),e("th",{style:{"text-align":"left"}},"Description")])],-1),S={style:{"text-align":"left"}},T=e("code",null,"no",-1),E=e("td",{style:{"text-align":"left"}},"Delete source code or binary after successful install",-1),A=e("tr",null,[e("td",{style:{"text-align":"left"}},[e("code",null,"yes")]),e("td",{style:{"text-align":"left"}},"Keep source code or binary after install")],-1),O=e("h3",{id:"plugin-repository-last-check-duration",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#plugin-repository-last-check-duration","aria-hidden":"true"},"#"),t(),e("code",null,"plugin_repository_last_check_duration")],-1),I=e("p",null,"Configure the duration (in minutes) between asdf plugin repository syncs. Trigger events result in a check of the duration. If more time has elapsed since the last sync than specified in the duration, a new sync occurs.",-1),C=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"Options"),e("th",{style:{"text-align":"left"}},"Description")])],-1),N={style:{"text-align":"left"}},R=e("code",null,"1",-1),M=e("code",null,"999999999",-1),U=e("br",null,null,-1),V=e("code",null,"60",-1),P=e("td",{style:{"text-align":"left"}},"Sync on trigger event if duration (in minutes) since last sync has been exceeded",-1),L=e("tr",null,[e("td",{style:{"text-align":"left"}},[e("code",null,"0")]),e("td",{style:{"text-align":"left"}},"Sync on each trigger event")],-1),H=e("tr",null,[e("td",{style:{"text-align":"left"}},[e("code",null,"never")]),e("td",{style:{"text-align":"left"}},"Never sync")],-1),$=a('<p>Sync events occur when the following commands are executed:</p><ul><li><code>asdf plugin add &lt;name&gt;</code></li><li><code>asdf plugin list all</code></li></ul><p><code>asdf plugin add &lt;name&gt; &lt;git-url&gt;</code> does NOT trigger a plugin sync.</p><div class="custom-container warning"><p class="custom-container-title">Note</p><p>Setting the value to <code>never</code> does not stop the plugin repository from being initially synced, for that behaviour see <code>disable_plugin_short_name_repository</code>.</p></div><h3 id="disable-plugin-short-name-repository" tabindex="-1"><a class="header-anchor" href="#disable-plugin-short-name-repository" aria-hidden="true">#</a> <code>disable_plugin_short_name_repository</code></h3><p>Disable synchronization of the asdf plugin short-name repository. Sync events will exit early if the short-name repository is disabled.</p>',6),B=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"Options"),e("th",{style:{"text-align":"left"}},"Description")])],-1),j={style:{"text-align":"left"}},G=e("code",null,"no",-1),q=e("td",{style:{"text-align":"left"}},"Clone or update the asdf plugin repository on sync events",-1),z=e("tr",null,[e("td",{style:{"text-align":"left"}},[e("code",null,"yes")]),e("td",{style:{"text-align":"left"}},"Disable the plugin short-name repository")],-1),K=a('<p>Sync events occur when the following commands are executed:</p><ul><li><code>asdf plugin add &lt;name&gt;</code></li><li><code>asdf plugin list all</code></li></ul><p><code>asdf plugin add &lt;name&gt; &lt;git-url&gt;</code> does NOT trigger a plugin sync.</p><div class="custom-container warning"><p class="custom-container-title">Note</p><p>Disabling the plugin short-name repository does not remove the repository if it has already synced. Remove the plugin repo with <code>rm --recursive --trash $ASDF_DATA_DIR/repository</code>.</p><p>Disabling the plugin short-name repository does not remove plugins previously installed from this source. Plugins can be removed with <code>asdf plugin remove &lt;name&gt;</code>. Removing a plugin will remove all installed versions of the managed tool.</p></div><h2 id="environment-variables" tabindex="-1"><a class="header-anchor" href="#environment-variables" aria-hidden="true">#</a> Environment Variables</h2><p>Setting environment variables varies depending on your system and Shell. Default locations depend upon your installation location and method (Git clone, Homebrew, AUR).</p><p>Environment variables should generally be set before sourcing <code>asdf.sh</code>/<code>asdf.fish</code> etc. For Elvish set above <code>use asdf</code>.</p><p>The following examples assume:</p><ul><li>an installation to <code>$HOME/.asdf</code></li><li>a Bash Shell</li></ul><h3 id="asdf-config-file" tabindex="-1"><a class="header-anchor" href="#asdf-config-file" aria-hidden="true">#</a> <code>ASDF_CONFIG_FILE</code></h3><p>Path to the <code>.asdfrc</code> configuration file. Can be set to any location. Must be an absolute path.</p><ul><li>Default: <code>$HOME/.asdfrc</code></li><li>Usage: <code>export ASDF_CONFIG_FILE=/home/john_doe/.config/asdf/.asdfrc</code></li></ul><h3 id="asdf-default-tool-versions-filename" tabindex="-1"><a class="header-anchor" href="#asdf-default-tool-versions-filename" aria-hidden="true">#</a> <code>ASDF_DEFAULT_TOOL_VERSIONS_FILENAME</code></h3><p>The filename of the file storing the tool names and versions. Can be any valid filename. Typically, you should not set this value unless you want to ignore <code>.tool-versions</code> files.</p><ul><li>Default: <code>.tool-versions</code></li><li>Usage: <code>export ASDF_DEFAULT_TOOL_VERSIONS_FILENAME=tool_versions</code></li></ul><h3 id="asdf-dir" tabindex="-1"><a class="header-anchor" href="#asdf-dir" aria-hidden="true">#</a> <code>ASDF_DIR</code></h3><p>The location of <code>asdf</code> core scripts. Can be set to any location. Must be an absolute path.</p><ul><li>Default: <code>$HOME/.asdf</code> (always the parent directory of the <code>bin/asdf</code> executable)</li><li>Usage: <code>export ASDF_DIR=/home/john_doe/.config/asdf</code></li></ul><h3 id="asdf-data-dir" tabindex="-1"><a class="header-anchor" href="#asdf-data-dir" aria-hidden="true">#</a> <code>ASDF_DATA_DIR</code></h3><p>The location where <code>asdf</code> will install plugins, shims and tool versions. Can be set to any location. Must be an absolute path.</p><ul><li>Default: <code>$HOME/.asdf</code></li><li>Usage: <code>export ASDF_DATA_DIR=/home/john_doe/.asdf</code></li></ul><h2 id="internal-configuration" tabindex="-1"><a class="header-anchor" href="#internal-configuration" aria-hidden="true">#</a> Internal Configuration</h2><p>Users should not worry about this section as it describes configuration internal to <code>asdf</code> useful for Package Managers and integrators.</p><ul><li><code>$ASDF_DIR/asdf_updates_disabled</code>: Updates via the <code>asdf update</code> command are disabled when this file is present (content irrelevant). This is used by package managers like Pacman or Homebrew to ensure the correct update method is used for the particular installation.</li></ul>',24);function W(Y,J){const o=l("Badge");return i(),d("div",null,[r,e("table",null,[h,e("tbody",null,[e("tr",null,[e("td",p,[u,t(),s(o,{type:"tip",text:"default",vertical:"middle"})]),f]),g])]),y,_,e("table",null,[m,e("tbody",null,[e("tr",null,[e("td",b,[v,t(),s(o,{type:"tip",text:"default",vertical:"middle"})]),x]),F])]),w,D,e("table",null,[k,e("tbody",null,[e("tr",null,[e("td",S,[T,t(),s(o,{type:"tip",text:"default",vertical:"middle"})]),E]),A])]),O,I,e("table",null,[C,e("tbody",null,[e("tr",null,[e("td",N,[t("integer in range "),R,t(" to "),M,t(),U,t(),V,t(" is "),s(o,{type:"tip",text:"default",vertical:"middle"})]),P]),L,H])]),$,e("table",null,[B,e("tbody",null,[e("tr",null,[e("td",j,[G,t(),s(o,{type:"tip",text:"default",vertical:"middle"})]),q]),z])]),K])}const X=n(c,[["render",W],["__file","configuration.html.vue"]]);export{X as default};
