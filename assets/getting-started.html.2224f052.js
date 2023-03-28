import{_ as d,r as c,o as r,c as i,f as p,a as s,b as a,d as n,w as t,e}from"./app.08d28afd.js";const h={},F=e('<h1 id="快速入门" tabindex="-1"><a class="header-anchor" href="#快速入门" aria-hidden="true">#</a> 快速入门</h1><p><code>asdf</code> 安装过程包括：</p><ol><li>安装依赖</li><li>下载 <code>asdf</code> 核心</li><li>安装 <code>asdf</code></li><li>为每一个你想要管理的工具/运行环境安装插件</li><li>安装工具/运行环境的一个版本</li><li>通过 <code>.tool-versions</code> 配置文件设置全局和项目版本</li></ol><h2 id="_1-安装依赖" tabindex="-1"><a class="header-anchor" href="#_1-安装依赖" aria-hidden="true">#</a> 1. 安装依赖</h2><p>asdf primarily requires <code>git</code> &amp; <code>curl</code>. Here is a <em>non-exhaustive</em> list of commands to run for <em>your</em> package manager (some might automatically install these tools in later steps).</p><table><thead><tr><th>OS</th><th>Package Manager</th><th>Command</th></tr></thead><tbody><tr><td>linux</td><td>Aptitude</td><td><code>apt install curl git</code></td></tr><tr><td>linux</td><td>DNF</td><td><code>dnf install curl git</code></td></tr><tr><td>linux</td><td>Pacman</td><td><code>pacman -S curl git</code></td></tr><tr><td>linux</td><td>Zypper</td><td><code>zypper install curl git</code></td></tr><tr><td>macOS</td><td>Homebrew</td><td><code>brew install coreutils curl git</code></td></tr><tr><td>macOS</td><td>Spack</td><td><code>spack install coreutils curl git</code></td></tr></tbody></table><div class="custom-container tip"><p class="custom-container-title">Note</p><p><code>sudo</code> may be required depending on your system configuration.</p></div><h2 id="_2-下载-asdf" tabindex="-1"><a class="header-anchor" href="#_2-下载-asdf" aria-hidden="true">#</a> 2. 下载 asdf</h2><h3 id="official-download" tabindex="-1"><a class="header-anchor" href="#official-download" aria-hidden="true">#</a> Official Download</h3>',9),u=e(`<div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">git clone https://github.com/asdf-vm/asdf.git </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.asdf --branch v0.11.3</span></span>
<span class="line"></span></code></pre></div>`,1),y=s("h3",{id:"community-supported-download-methods",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#community-supported-download-methods","aria-hidden":"true"},"#"),a(" Community Supported Download Methods")],-1),m=s("p",null,[a("We highly recommend using the official "),s("code",null,"git"),a(" method.")],-1),f=s("thead",null,[s("tr",null,[s("th",null,"Method"),s("th",null,"Command")])],-1),g=s("tr",null,[s("td",null,"Homebrew"),s("td",null,[s("code",null,"brew install asdf")])],-1),b=s("td",null,"Pacman",-1),v=s("code",null,"git clone https://aur.archlinux.org/asdf-vm.git && cd asdf-vm && makepkg -si",-1),_={href:"https://wiki.archlinux.org/index.php/AUR_helpers",target:"_blank",rel:"noopener noreferrer"},E=e(`<h2 id="_3-安装-asdf" tabindex="-1"><a class="header-anchor" href="#_3-安装-asdf" aria-hidden="true">#</a> 3. 安装 asdf</h2><p>根据 Shell 脚本、操作系统和安装方法的组合不同，相应的配置也会不同。展开以下与你的系统最匹配的选项：</p><details class="custom-container details"><summary>Bash &amp; Git</summary><p>在 <code>~/.bashrc</code> 文件中加入以下内容：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">.</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">&quot;</span><span style="color:#F8F8F2;">$HOME</span><span style="color:#E6DB74;">/.asdf/asdf.sh&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>补全功能必须在 <code>.bashrc</code> 文件中加入以下内容来配置完成：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">.</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">&quot;</span><span style="color:#F8F8F2;">$HOME</span><span style="color:#E6DB74;">/.asdf/completions/asdf.bash&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></details><details class="custom-container details"><summary>Bash &amp; Git (macOS)</summary><p>如果你正在使用 <strong>macOS Catalina 或者更新的版本</strong>, 默认的 shell 已经被修改为 <strong>ZSH</strong>。除非修改回 Bash, 否则请遵循 ZSH 的说明。</p><p>在 <code>~/.bash_profile</code> 文件中加入以下内容：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">.</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">&quot;</span><span style="color:#F8F8F2;">$HOME</span><span style="color:#E6DB74;">/.asdf/asdf.sh&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>补全功能必须在 <code>.bash_profile</code> 文件中使用以下内容手动配置完成：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">.</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">&quot;</span><span style="color:#F8F8F2;">$HOME</span><span style="color:#E6DB74;">/.asdf/completions/asdf.bash&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></details>`,4),k={class:"custom-container details"},x=e(`<summary>Bash &amp; Homebrew</summary><p>使用以下命令将 <code>asdf.sh</code> 加入到 <code>~/.bashrc</code> 文件中：</p><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">echo</span><span style="color:#F8F8F2;"> -e </span><span style="color:#E6DB74;">&quot;\\n. </span><span style="color:#AE81FF;">\\&quot;</span><span style="color:#E6DB74;">$(brew --prefix asdf)/libexec/asdf.sh</span><span style="color:#AE81FF;">\\&quot;</span><span style="color:#E6DB74;">&quot;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">&gt;&gt;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.bashrc</span></span>
<span class="line"></span></code></pre></div>`,3),D={href:"https://docs.brew.sh/Shell-Completion#configuring-completions-in-bash",target:"_blank",rel:"noopener noreferrer"},q=e(`<div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">echo</span><span style="color:#F8F8F2;"> -e </span><span style="color:#E6DB74;">&quot;\\n. </span><span style="color:#AE81FF;">\\&quot;</span><span style="color:#E6DB74;">$(brew --prefix asdf)/etc/bash_completion.d/asdf.bash</span><span style="color:#AE81FF;">\\&quot;</span><span style="color:#E6DB74;">&quot;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">&gt;&gt;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.bashrc</span></span>
<span class="line"></span></code></pre></div>`,1),B={class:"custom-container details"},S=e(`<summary>Bash &amp; Homebrew (macOS)</summary><p>如果你正在使用 <strong>macOS Catalina 或者更新的版本</strong>, 默认的 shell 已经被修改为 <strong>ZSH</strong>。除非修改回 Bash, 否则请遵循 ZSH 的说明。</p><p>使用以下命令将 <code>asdf.sh</code> 加入到 <code>~/.bash_profile</code> 文件中：</p><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">echo</span><span style="color:#F8F8F2;"> -e </span><span style="color:#E6DB74;">&quot;\\n. </span><span style="color:#AE81FF;">\\&quot;</span><span style="color:#E6DB74;">$(brew --prefix asdf)/libexec/asdf.sh</span><span style="color:#AE81FF;">\\&quot;</span><span style="color:#E6DB74;">&quot;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">&gt;&gt;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.bash_profile</span></span>
<span class="line"></span></code></pre></div>`,4),H={href:"https://docs.brew.sh/Shell-Completion#configuring-completions-in-bash",target:"_blank",rel:"noopener noreferrer"},w=e(`<div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">echo</span><span style="color:#F8F8F2;"> -e </span><span style="color:#E6DB74;">&quot;\\n. </span><span style="color:#AE81FF;">\\&quot;</span><span style="color:#E6DB74;">$(brew --prefix asdf)/etc/bash_completion.d/asdf.bash</span><span style="color:#AE81FF;">\\&quot;</span><span style="color:#E6DB74;">&quot;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">&gt;&gt;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.bash_profile</span></span>
<span class="line"></span></code></pre></div>`,1),$={class:"custom-container details"},z=e(`<summary>Bash &amp; Pacman</summary><p>在 <code>~/.bashrc</code> 文件中加入以下内容：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">.</span><span style="color:#F8F8F2;"> /opt/asdf-vm/asdf.sh</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,3),O={href:"https://wiki.archlinux.org/title/bash#Common_programs_and_options",target:"_blank",rel:"noopener noreferrer"},A=s("code",null,"bash-completion",-1),Z=e(`<details class="custom-container details"><summary>Fish &amp; Git</summary><p>在 <code>~/.config/fish/config.fish</code> 文件中加入以下内容：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">source</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.asdf/asdf.fish</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>补全功能必须按照以下命令手动配置完成：</p><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">mkdir -p </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.config/fish/completions</span><span style="color:#F92672;">;</span><span style="color:#F8F8F2;"> and ln -s </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.asdf/completions/asdf.fish </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.config/fish/completions</span></span>
<span class="line"></span></code></pre></div></details>`,1),j={class:"custom-container details"},M=e(`<summary>Fish &amp; Homebrew</summary><p>使用以下命令将 <code>asdf.fish</code> 加入到 <code>~/.config/fish/config.fish</code> 文件中：</p><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">echo</span><span style="color:#F8F8F2;"> -e </span><span style="color:#E6DB74;">&quot;\\nsource &quot;</span><span style="color:#F8F8F2;">(brew --prefix asdf)</span><span style="color:#E6DB74;">&quot;/libexec/asdf.fish&quot;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">&gt;&gt;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.config/fish/config.fish</span></span>
<span class="line"></span></code></pre></div>`,3),P={href:"https://docs.brew.sh/Shell-Completion#configuring-completions-in-fish",target:"_blank",rel:"noopener noreferrer"},N=e(`<details class="custom-container details"><summary>Fish &amp; Pacman</summary><p>在 <code>~/.config/fish/config.fish</code> 文件中加入以下内容：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">source</span><span style="color:#F8F8F2;"> /opt/asdf-vm/asdf.fish</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>补全功能将会在安装过程中由 AUR 包管理器自动配置完成。</p></details><details class="custom-container details"><summary>Elvish &amp; Git</summary><p>使用以下命令将 <code>asdf.elv</code> 加入到 <code>~/.config/elvish/rc.elv</code> 文件中：</p><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">mkdir -p </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.config/elvish/lib</span><span style="color:#F92672;">;</span><span style="color:#F8F8F2;"> ln -s </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.asdf/asdf.elv </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.config/elvish/lib/asdf.elv</span></span>
<span class="line"><span style="color:#66D9EF;">echo</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">&quot;\\n&quot;&#39;use asdf _asdf; var asdf~ = $_asdf:asdf~&#39;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">&gt;&gt;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.config/elvish/rc.elv</span></span>
<span class="line"><span style="color:#66D9EF;">echo</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">&quot;\\n&quot;&#39;set edit:completion:arg-completer[asdf] = $_asdf:arg-completer~&#39;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">&gt;&gt;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.config/elvish/rc.elv</span></span>
<span class="line"></span></code></pre></div><p>补全功能将会自动配置。</p></details><details class="custom-container details"><summary>Elvish &amp; Homebrew</summary><p>使用以下命令将 <code>asdf.elv</code> 加入到 <code>~/.config/elvish/rc.elv</code> 文件中：</p><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">mkdir -p </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.config/elvish/lib</span><span style="color:#F92672;">;</span><span style="color:#F8F8F2;"> ln -s (brew --prefix asdf)/libexec/asdf.elv </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.config/elvish/lib/asdf.elv</span></span>
<span class="line"><span style="color:#66D9EF;">echo</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">&quot;\\n&quot;&#39;use asdf _asdf; var asdf~ = $_asdf:asdf~&#39;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">&gt;&gt;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.config/elvish/rc.elv</span></span>
<span class="line"><span style="color:#66D9EF;">echo</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">&quot;\\n&quot;&#39;set edit:completion:arg-completer[asdf] = $_asdf:arg-completer~&#39;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">&gt;&gt;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.config/elvish/rc.elv</span></span>
<span class="line"></span></code></pre></div><p>补全功能将会自动配置。</p></details><details class="custom-container details"><summary>Elvish &amp; Pacman</summary><p>使用以下命令将 <code>asdf.elv</code> 加入到 <code>~/.config/elvish/rc.elv</code> 文件中：</p><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">mkdir -p </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.config/elvish/lib</span><span style="color:#F92672;">;</span><span style="color:#F8F8F2;"> ln -s /opt/asdf-vm/asdf.elv </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.config/elvish/lib/asdf.elv</span></span>
<span class="line"><span style="color:#66D9EF;">echo</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">&quot;\\n&quot;&#39;use asdf _asdf; var asdf~ = $_asdf:asdf~&#39;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">&gt;&gt;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.config/elvish/rc.elv</span></span>
<span class="line"><span style="color:#66D9EF;">echo</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">&quot;\\n&quot;&#39;set edit:completion:arg-completer[asdf] = $_asdf:arg-completer~&#39;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">&gt;&gt;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.config/elvish/rc.elv</span></span>
<span class="line"></span></code></pre></div><p>补全功能将会自动配置。</p></details>`,4),C={class:"custom-container details"},I=e(`<summary>ZSH &amp; Git</summary><p>在 <code>~/.zshrc</code> 文件中加入以下内容：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">.</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">&quot;</span><span style="color:#F8F8F2;">$HOME</span><span style="color:#E6DB74;">/.asdf/asdf.sh&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,3),R=s("strong",null,"或者",-1),G={href:"https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/asdf",target:"_blank",rel:"noopener noreferrer"},U=e(`<p>补全功能会被 ZSH 框架 <code>asdf</code> 插件或者通过在 <code>.zshrc</code> 文件中加入以下内容自动配置：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#88846F;"># append completions to fpath</span></span>
<span class="line"><span style="color:#F8F8F2;">fpath=(\${ASDF_DIR}/completions $fpath)</span></span>
<span class="line"><span style="color:#88846F;"># initialise completions with ZSH&#39;s compinit</span></span>
<span class="line"><span style="color:#F8F8F2;">autoload -Uz compinit </span><span style="color:#F92672;">&amp;&amp;</span><span style="color:#F8F8F2;"> compinit</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>如果你正在使用自定义的 <code>compinit</code> 配置，请确保 <code>compinit</code> 在 <code>asdf.sh</code> 生效位置的下方</li><li>如果你正在使用自定义的 <code>compinit</code> 配置和 ZSH 框架，请确保 <code>compinit</code> 在框架生效位置的下方</li></ul><p><strong>警告</strong></p>`,4),L=s("code",null,"asdf",-1),V=s("code",null,"fpath",-1),T={href:"https://github.com/ohmyzsh/ohmyzsh/pull/8837",target:"_blank",rel:"noopener noreferrer"},W={class:"custom-container details"},X=e('<summary>ZSH &amp; Homebrew</summary><p>使用以下命令将 <code>asdf.sh</code> 加入到 <code>~/.zshrc</code> 文件中：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">echo</span><span style="color:#F8F8F2;"> -e </span><span style="color:#E6DB74;">&quot;\\n. $(brew --prefix asdf)/libexec/asdf.sh&quot;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">&gt;&gt;</span><span style="color:#F8F8F2;"> ${ZDOTDIR</span><span style="color:#F92672;">:-</span><span style="color:#F8F8F2;">~}/.zshrc</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>',3),J=s("strong",null,"或者",-1),K={href:"https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/asdf",target:"_blank",rel:"noopener noreferrer"},Q=s("code",null,"asdf",-1),Y={href:"https://docs.brew.sh/Shell-Completion#configuring-completions-in-zsh",target:"_blank",rel:"noopener noreferrer"},ss=s("code",null,"asdf",-1),as=s("code",null,"fpath",-1),es={href:"https://github.com/ohmyzsh/ohmyzsh/pull/8837",target:"_blank",rel:"noopener noreferrer"},ns={class:"custom-container details"},os=e(`<summary>ZSH &amp; Pacman</summary><p>在 <code>~/.zshrc</code> 文件中加入以下内容：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">.</span><span style="color:#F8F8F2;"> /opt/asdf-vm/asdf.sh</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,3),ls={href:"https://wiki.archlinux.org/index.php/zsh#Command_completion",target:"_blank",rel:"noopener noreferrer"},ts=e(`<details class="custom-container details"><summary>Nushell &amp; Git</summary><p>使用以下命令将 <code>asdf.nu</code> 加入到 <code>~/.config/nushell/config.nu</code> 文件中：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#E6DB74;">&quot;\\nlet-env ASDF_NU_DIR = (</span><span style="color:#F8F8F2;">$env</span><span style="color:#E6DB74;">.HOME | path join &#39;.asdf&#39;)\\n source &quot;</span><span style="color:#F8F8F2;"> + ($env.HOME </span><span style="color:#F92672;">|</span><span style="color:#F8F8F2;"> path join </span><span style="color:#E6DB74;">&#39;.asdf/asdf.nu&#39;</span><span style="color:#F8F8F2;">) </span><span style="color:#F92672;">|</span><span style="color:#F8F8F2;"> save --append $nu.config-path</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>补全功能将会自动配置。</p></details><details class="custom-container details"><summary>Nushell &amp; Homebrew</summary><p>使用以下命令将 <code>asdf.nu</code> 加入到 <code>~/.config/nushell/config.nu</code> 文件中:</p><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#E6DB74;">&quot;\\nlet-env ASDF_NU_DIR = (brew --prefix asdf | str trim | into string | path join &#39;libexec&#39;)\\n source &quot;</span><span style="color:#F8F8F2;"> +  (brew --prefix asdf </span><span style="color:#F92672;">|</span><span style="color:#F8F8F2;"> into string </span><span style="color:#F92672;">|</span><span style="color:#F8F8F2;"> path join </span><span style="color:#E6DB74;">&#39;libexec/asdf.nu&#39;</span><span style="color:#F8F8F2;">) </span><span style="color:#F92672;">|</span><span style="color:#F8F8F2;"> save --append $nu.config-path</span></span>
<span class="line"></span></code></pre></div><p>补全功能将会自动配置。</p></details><details class="custom-container details"><summary>Nushell &amp; Pacman</summary><p>使用以下命令将 <code>asdf.nu</code> 加入到 <code>~/.config/nushell/config.nu</code> 文件中:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#E6DB74;">&quot;\\nlet-env ASDF_NU_DIR = &#39;/opt/asdf-vm/&#39;\\n source /opt/asdf-vm/asdf.nu&quot;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">|</span><span style="color:#F8F8F2;"> save --append $nu.config-path</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>补全功能将会自动配置。</p></details><details class="custom-container details"><summary>POSIX Shell &amp; Git</summary><p>在 <code>~/.profile</code> 文件中加入以下内容：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F92672;">export</span><span style="color:#F8F8F2;"> ASDF_DIR=</span><span style="color:#E6DB74;">&quot;</span><span style="color:#F8F8F2;">$HOME</span><span style="color:#E6DB74;">/.asdf&quot;</span></span>
<span class="line"><span style="color:#66D9EF;">.</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">&quot;</span><span style="color:#F8F8F2;">$HOME</span><span style="color:#E6DB74;">/.asdf/asdf.sh&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></details><details class="custom-container details"><summary>POSIX Shell &amp; Homebrew</summary><p>使用以下命令将 <code>asdf.sh</code> 加入到 <code>~/.profile</code> 文件中：</p><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">echo</span><span style="color:#F8F8F2;"> -e </span><span style="color:#E6DB74;">&quot;\\nexport ASDF_DIR=</span><span style="color:#AE81FF;">\\&quot;</span><span style="color:#E6DB74;">$(brew --prefix asdf)/libexec/asdf.sh</span><span style="color:#AE81FF;">\\&quot;</span><span style="color:#E6DB74;">&quot;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">&gt;&gt;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.profile</span></span>
<span class="line"><span style="color:#66D9EF;">echo</span><span style="color:#F8F8F2;"> -e </span><span style="color:#E6DB74;">&quot;\\n. </span><span style="color:#AE81FF;">\\&quot;</span><span style="color:#E6DB74;">$(brew --prefix asdf)/libexec/asdf.sh</span><span style="color:#AE81FF;">\\&quot;</span><span style="color:#E6DB74;">&quot;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">&gt;&gt;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.profile</span></span>
<span class="line"></span></code></pre></div></details><details class="custom-container details"><summary>POSIX Shell &amp; Pacman</summary><p>在 <code>~/.profile</code> 文件中加入以下内容：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F92672;">export</span><span style="color:#F8F8F2;"> ASDF_DIR=</span><span style="color:#E6DB74;">&quot;/opt/asdf-vm&quot;</span></span>
<span class="line"><span style="color:#66D9EF;">.</span><span style="color:#F8F8F2;"> /opt/asdf-vm/asdf.sh</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></details><p><code>asdf</code> 脚本需要在设置好的 <code>$PATH</code> <strong>之后</strong>和已经生效的框架（比如 oh-my-zsh 等等）<strong>之后</strong>的位置生效。</p><p>通常打开一个新的终端标签页来重启你的 shell 让 <code>PATH</code> 更改即时生效。</p><h2 id="核心安装完成" tabindex="-1"><a class="header-anchor" href="#核心安装完成" aria-hidden="true">#</a> 核心安装完成！</h2><p>这样就完成了 <code>asdf</code> 核心的安装 🎉</p><p><code>asdf</code> 仅在你安装<strong>插件</strong>、<strong>工具</strong>和管理它们的<strong>版本</strong>时才开始真正发挥作用。请继续阅读下面的指南来了解这些是如何做到的。</p><h2 id="_4-安装插件" tabindex="-1"><a class="header-anchor" href="#_4-安装插件" aria-hidden="true">#</a> 4. 安装插件</h2>`,12),cs={href:"https://github.com/asdf-vm/asdf-nodejs/",target:"_blank",rel:"noopener noreferrer"},ps=s("code",null,"asdf-nodejs",-1),ds={href:"https://nodejs.org/",target:"_blank",rel:"noopener noreferrer"},rs=e(`<h3 id="插件依赖" tabindex="-1"><a class="header-anchor" href="#插件依赖" aria-hidden="true">#</a> 插件依赖</h3><p>每个插件都有依赖，所以我们需要确认应该列举了这些依赖的插件源码。对于 <code>asdf-nodejs</code> 来说，它们是：</p><table><thead><tr><th>操作系统</th><th>安装依赖</th></tr></thead><tbody><tr><td>Linux (Debian)</td><td><code>apt-get install dirmngr gpg curl gawk</code></td></tr><tr><td>macOS</td><td><code>brew install gpg gawk</code></td></tr></tbody></table><p>我们应该提前安装这些依赖，因为有些插件有 post-install 钩子。</p><h3 id="安装插件" tabindex="-1"><a class="header-anchor" href="#安装插件" aria-hidden="true">#</a> 安装插件</h3><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf plugin add nodejs https://github.com/asdf-vm/asdf-nodejs.git</span></span>
<span class="line"></span></code></pre></div><h2 id="_5-安装指定版本" tabindex="-1"><a class="header-anchor" href="#_5-安装指定版本" aria-hidden="true">#</a> 5. 安装指定版本</h2><p>现在我们已经有了 Node.js 插件，所以我们可以开始安装某个版本了。</p><p>我们通过 <code>asdf list all nodejs</code> 可以看到所有可用的版本或者通过 <code>asdf list all nodejs 14</code> 查看版本子集。</p><p>我们将只安装最新可用的 <code>latest</code> 版本：</p><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf install nodejs latest</span></span>
<span class="line"></span></code></pre></div><div class="custom-container tip"><p class="custom-container-title">注意</p><p><code>asdf</code> 强制使用准确的版本。<code>latest</code> 是一个通过 <code>asdf</code> 来解析到执行时刻的实际版本号的辅助工具。</p></div><h2 id="_6-设置默认版本" tabindex="-1"><a class="header-anchor" href="#_6-设置默认版本" aria-hidden="true">#</a> 6. 设置默认版本</h2><p><code>asdf</code> 在从当前工作目录一直到 <code>$HOME</code> 目录的所有 <code>.tool-versions</code> 文件中进行工具的版本查找。查找在执行 <code>asdf</code> 管理的工具时实时发生。</p><div class="custom-container warning"><p class="custom-container-title">警告</p><p>如果没有为工具找到指定的版本，则会出现<strong>错误</strong>。<code>asdf current</code> 将显示当前目录中的工具和版本解析结果，或者不存在，以便你可以观察哪些工具将无法执行。</p></div><h3 id="全局" tabindex="-1"><a class="header-anchor" href="#全局" aria-hidden="true">#</a> 全局</h3><p>全局默认配置在 <code>$HOME/.tool-versions</code> 文件中进行管理。使用以下命令可以设置一个全局版本：</p><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf global nodejs latest</span></span>
<span class="line"></span></code></pre></div><p><code>$HOME/.tool-versions</code> 文件内容将会如下所示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">nodejs 16.5.0</span></span>
<span class="line"><span style="color:#F8F8F2;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,20),is=s("code",null,"asdf",-1),hs=s("code",null,"python",-1),Fs=s("code",null,"asdf",-1),us=e(`<h3 id="本地" tabindex="-1"><a class="header-anchor" href="#本地" aria-hidden="true">#</a> 本地</h3><p>本地版本被定义在 <code>$PWD/.tool-versions</code> 文件中（当前工作目录）。通常，这将会是一个项目的 Git 存储库。当在你想要的目录执行：</p><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf </span><span style="color:#F92672;">local</span><span style="color:#F8F8F2;"> nodejs latest</span></span>
<span class="line"></span></code></pre></div><p><code>$PWD/.tool-versions</code> 文件内容将会如下所示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">nodejs 16.5.0</span></span>
<span class="line"><span style="color:#F8F8F2;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="使用现有工具版本文件" tabindex="-1"><a class="header-anchor" href="#使用现有工具版本文件" aria-hidden="true">#</a> 使用现有工具版本文件</h3><p><code>asdf</code> 支持从其他版本管理器的现有版本文件中迁移过来，比如 <code>rbenv</code> 的 <code>.ruby-version</code> 文件。这在每个插件中都原生支持。</p>`,7),ys={href:"https://github.com/asdf-vm/asdf-nodejs/",target:"_blank",rel:"noopener noreferrer"},ms=s("code",null,"asdf-nodejs",-1),fs=s("code",null,".nvmrc",-1),gs=s("code",null,".node-version",-1),bs=s("code",null,"asdf",-1),vs=s("code",null,"$HOME/.asdfrc",-1),_s=e(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">legacy_version_file = yes</span></span>
<span class="line"><span style="color:#F8F8F2;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,1),Es=e('<h2 id="完成指南" tabindex="-1"><a class="header-anchor" href="#完成指南" aria-hidden="true">#</a> 完成指南！</h2><p>恭喜你完成了 <code>asdf</code> 的快速上手 🎉 你现在可以管理你的项目的 <code>nodejs</code> 版本了。对于项目中的其他工具类型可以执行类似步骤即可！</p><p><code>asdf</code> 还有更多命令需要熟悉，你可以通过运行 <code>asdf --help</code> 或者 <code>asdf</code> 来查看它们。命令主要分为三类：</p>',3),ks=s("code",null,"asdf",-1);function xs(Ds,qs){const o=c("ExternalLinkIcon"),l=c("RouterLink");return r(),i("div",null,[F,p(" x-release-please-start-version "),u,p(" x-release-please-end "),y,m,s("table",null,[f,s("tbody",null,[g,s("tr",null,[b,s("td",null,[v,a(" or use your preferred "),s("a",_,[a("AUR helper"),n(o)])])])])]),E,s("details",k,[x,s("p",null,[a("补全功能将需要 "),s("a",D,[a("按照 Homebrew 的说明完成配置"),n(o)]),a(" 或者执行以下命令：")]),q]),s("details",B,[S,s("p",null,[a("补全功能将需要 "),s("a",H,[a("按照 Homebrew 的说明完成配置"),n(o)]),a(" 或者执行以下命令：")]),w]),s("details",$,[z,s("p",null,[a("为了让补全功能正常工作需要安装 "),s("a",O,[A,n(o)]),a(" 。")])]),Z,s("details",j,[M,s("p",null,[a("Fish shell 的补全功能可以交给 "),s("a",P,[a("Homebrew 处理"),n(o)]),a(". 很友好！")])]),N,s("details",C,[I,s("p",null,[R,a(" 使用 ZSH 框架插件，比如 "),s("a",G,[a("asdf for oh-my-zsh"),n(o)]),a(" 将会使脚本生效并安装补全功能。")]),U,s("p",null,[a("如果你正在使用 ZSH 框架，有关的 "),L,a(" 插件或许需要更新才能通过 "),V,a(" 正确地使用最新的 ZSH 补全功能。Oh-My-ZSH asdf 插件还在更新中，请查看 "),s("a",T,[a("ohmyzsh/ohmyzsh#8837"),n(o)]),a(" 了解更多。")])]),s("details",W,[X,s("p",null,[J,a(" 使用 ZSH 框架插件，比如 "),s("a",K,[a("asdf for oh-my-zsh"),n(o)]),a(" 将会使脚本生效并安装补全功能。")]),s("p",null,[a("补全功能可以被 ZSH 框架 "),Q,a(" 或者 "),s("a",Y,[a("按照 Homebrew 的指引"),n(o)]),a(" 完成配置。如果你正在使用 ZSH 框架，有关的 "),ss,a(" 插件或许需要更新才能通过 "),as,a(" 正确地使用最新的 ZSH 补全功能。Oh-My-ZSH asdf 插件还在更新中，请查看 "),s("a",es,[a("ohmyzsh/ohmyzsh#8837"),n(o)]),a(" 了解更多。")])]),s("details",ns,[os,s("p",null,[a("补全功能会被放在一个对 ZSH 很友好的位置，但是 "),s("a",ls,[a("ZSH 必须使用自动补全完成配置"),n(o)]),a("。")])]),ts,s("p",null,[a("出于演示目的，我们将通过 "),s("a",cs,[ps,n(o)]),a(" 插件来安装和设置 "),s("a",ds,[a("Node.js"),n(o)]),a("。")]),rs,s("p",null,[a("某些操作系统已经有一些由系统而非 "),is,a(" 安装和管理的工具了，"),hs,a(" 就是一个常见的例子。你需要告诉 "),Fs,a(" 将管理权还给系统。"),n(l,{to:"/zh-hans/manage/versions.html"},{default:t(()=>[a("版本参考部分")]),_:1}),a(" 将会引导你。")]),us,s("p",null,[s("a",ys,[ms,n(o)]),a(" 支持从 "),fs,a(" 和 "),gs,a(" 文件进行迁移。为了启用此功能，请在 "),bs,a(" 配置文件 "),vs,a(" 中加入以下内容：")]),_s,s("p",null,[a("请查看 "),n(l,{to:"/zh-hans/manage/configuration.html"},{default:t(()=>[a("配置")]),_:1}),a(" 参考页面可以了解更多配置选项。")]),Es,s("ul",null,[s("li",null,[n(l,{to:"/zh-hans/manage/core.html"},{default:t(()=>[ks,a(" 核心")]),_:1})]),s("li",null,[n(l,{to:"/zh-hans/manage/plugins.html"},{default:t(()=>[a("插件")]),_:1})]),s("li",null,[n(l,{to:"/zh-hans/manage/versions.html"},{default:t(()=>[a("（工具的）版本")]),_:1})])])])}const Ss=d(h,[["render",xs],["__file","getting-started.html.vue"]]);export{Ss as default};
