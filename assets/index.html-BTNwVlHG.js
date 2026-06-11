import{_ as n,c as a,a as l,o as e}from"./app-BZiX174j.js";const i={};function t(c,s){return e(),a("div",null,s[0]||(s[0]=[l(`<div class="language-shell line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="shell" style="--vp-collapsed-lines:15;background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#7F848E;font-style:italic;">#!/usr/bin/env sh</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 确保脚本抛出遇到的错误</span></span>
<span class="line"><span style="color:#56B6C2;">set</span><span style="color:#D19A66;"> -e</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 生成静态文件</span></span>
<span class="line"><span style="color:#61AFEF;">npm</span><span style="color:#98C379;"> run</span><span style="color:#98C379;"> build</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 进入生成的文件夹</span></span>
<span class="line"><span style="color:#56B6C2;">cd</span><span style="color:#98C379;"> docs/.vuepress/dist</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 如果是发布到自定义域名</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># echo &#39;www.example.com&#39; &gt; CNAME</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;">git</span><span style="color:#98C379;"> init</span></span>
<span class="line"><span style="color:#61AFEF;">git</span><span style="color:#98C379;"> add</span><span style="color:#D19A66;"> -A</span></span>
<span class="line"><span style="color:#61AFEF;">git</span><span style="color:#98C379;"> commit</span><span style="color:#D19A66;"> -m</span><span style="color:#98C379;"> &#39;deploy&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 如果发布到 https://&lt;USERNAME&gt;.github.io</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># git push -f git@github.com:&lt;USERNAME&gt;/&lt;USERNAME&gt;.github.io.git master</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 如果发布到 https://&lt;USERNAME&gt;.github.io/&lt;REPO&gt;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># git push -f git@github.com:&lt;USERNAME&gt;/&lt;REPO&gt;.git master:gh-pages</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div>`,1)]))}const o=n(i,[["render",t]]),r=JSON.parse('{"path":"/article/eblbu7wp/","title":"博客部署脚本","lang":"zh-CN","frontmatter":{"title":"博客部署脚本","createTime":"2025/03/20 10:13:08","permalink":"/article/eblbu7wp/"},"readingTime":{"minutes":0.37,"words":111},"git":{"createdTime":1742541808000,"updatedTime":1747639268000,"contributors":[{"name":"haomingze","username":"","email":"13261764+haomingze@user.noreply.gitee.com","commits":2,"avatar":"https://gravatar.com/avatar/56291d09a2d74fd2b3b35332ee79e160346be75633cdb749e82690c73eee8d6e?d=retro"}]},"filePathRelative":"常用开发知识总结/运维/博客部署脚本.md","headers":[],"categoryList":[{"id":"e5c714","sort":10000,"name":"常用开发知识总结"},{"id":"2ccabd","sort":10001,"name":"运维"}]}');export{o as comp,r as data};
