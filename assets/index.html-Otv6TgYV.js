import{_ as n,c as l,a,o as p}from"./app-BZiX174j.js";const e={};function o(c,s){return p(),l("div",null,s[0]||(s[0]=[a(`<div class="language-cpp line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="cpp" style="--vp-collapsed-lines:15;background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#7F848E;font-style:italic;">//数据结构</span></span>
<span class="line"><span style="color:#ABB2BF;">————————————————————————————————————————————</span></span>
<span class="line"><span style="color:#ABB2BF;">单链表</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// head存储链表头，e[]存储节点的值，ne[]存储节点的next指针，idx表示当前用到了哪个节点</span></span>
<span class="line"><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> head, </span><span style="color:#E5C07B;">e</span><span style="color:#ABB2BF;">[N], </span><span style="color:#E5C07B;">ne</span><span style="color:#ABB2BF;">[N], idx;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 初始化</span></span>
<span class="line"><span style="color:#C678DD;">void</span><span style="color:#61AFEF;"> init</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">    head </span><span style="color:#C678DD;">=</span><span style="color:#C678DD;"> -</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    idx </span><span style="color:#C678DD;">=</span><span style="color:#D19A66;"> 0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 在链表头插入一个数a</span></span>
<span class="line"><span style="color:#C678DD;">void</span><span style="color:#61AFEF;"> insert</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">int</span><span style="color:#E06C75;font-style:italic;"> a</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#E5C07B;">    e</span><span style="color:#ABB2BF;">[idx] </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> a, </span><span style="color:#E5C07B;">ne</span><span style="color:#ABB2BF;">[idx] </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> head, head </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> idx </span><span style="color:#C678DD;">++</span><span style="color:#ABB2BF;"> ;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 将头结点删除，需要保证头结点存在</span></span>
<span class="line"><span style="color:#C678DD;">void</span><span style="color:#61AFEF;"> remove</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">    head </span><span style="color:#C678DD;">=</span><span style="color:#E5C07B;"> ne</span><span style="color:#ABB2BF;">[head];</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">____________________________________________________________________________________</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">双链表 </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// e[]表示节点的值，l[]表示节点的左指针，r[]表示节点的右指针，idx表示当前用到了哪个节点</span></span>
<span class="line"><span style="color:#C678DD;">int</span><span style="color:#E5C07B;"> e</span><span style="color:#ABB2BF;">[N], </span><span style="color:#E5C07B;">l</span><span style="color:#ABB2BF;">[N], </span><span style="color:#E5C07B;">r</span><span style="color:#ABB2BF;">[N], idx;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 初始化</span></span>
<span class="line"><span style="color:#C678DD;">void</span><span style="color:#61AFEF;"> init</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">    //0是左端点，1是右端点</span></span>
<span class="line"><span style="color:#E5C07B;">    r</span><span style="color:#ABB2BF;">[</span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">] </span><span style="color:#C678DD;">=</span><span style="color:#D19A66;"> 1</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">l</span><span style="color:#ABB2BF;">[</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">] </span><span style="color:#C678DD;">=</span><span style="color:#D19A66;"> 0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    idx </span><span style="color:#C678DD;">=</span><span style="color:#D19A66;"> 2</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 在节点a的右边插入一个数x</span></span>
<span class="line"><span style="color:#C678DD;">void</span><span style="color:#61AFEF;"> insert</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">int</span><span style="color:#E06C75;font-style:italic;"> a</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">int</span><span style="color:#E06C75;font-style:italic;"> x</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#E5C07B;">    e</span><span style="color:#ABB2BF;">[idx] </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> x;</span></span>
<span class="line"><span style="color:#E5C07B;">    l</span><span style="color:#ABB2BF;">[idx] </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> a, </span><span style="color:#E5C07B;">r</span><span style="color:#ABB2BF;">[idx] </span><span style="color:#C678DD;">=</span><span style="color:#E5C07B;"> r</span><span style="color:#ABB2BF;">[a];</span></span>
<span class="line"><span style="color:#E5C07B;">    l</span><span style="color:#ABB2BF;">[</span><span style="color:#E5C07B;">r</span><span style="color:#ABB2BF;">[a]] </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> idx, </span><span style="color:#E5C07B;">r</span><span style="color:#ABB2BF;">[a] </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> idx </span><span style="color:#C678DD;">++</span><span style="color:#ABB2BF;"> ;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 删除节点a</span></span>
<span class="line"><span style="color:#C678DD;">void</span><span style="color:#61AFEF;"> remove</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">int</span><span style="color:#E06C75;font-style:italic;"> a</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#E5C07B;">    l</span><span style="color:#ABB2BF;">[</span><span style="color:#E5C07B;">r</span><span style="color:#ABB2BF;">[a]] </span><span style="color:#C678DD;">=</span><span style="color:#E5C07B;"> l</span><span style="color:#ABB2BF;">[a];</span></span>
<span class="line"><span style="color:#E5C07B;">    r</span><span style="color:#ABB2BF;">[</span><span style="color:#E5C07B;">l</span><span style="color:#ABB2BF;">[a]] </span><span style="color:#C678DD;">=</span><span style="color:#E5C07B;"> r</span><span style="color:#ABB2BF;">[a];</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">________________________________________________________</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">栈</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// tt表示栈顶</span></span>
<span class="line"><span style="color:#C678DD;">int</span><span style="color:#E5C07B;"> stk</span><span style="color:#ABB2BF;">[N], tt </span><span style="color:#C678DD;">=</span><span style="color:#D19A66;"> 0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 向栈顶插入一个数</span></span>
<span class="line"><span style="color:#E5C07B;">stk</span><span style="color:#ABB2BF;">[ </span><span style="color:#C678DD;">++</span><span style="color:#ABB2BF;"> tt] </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> x;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 从栈顶弹出一个数</span></span>
<span class="line"><span style="color:#ABB2BF;">tt </span><span style="color:#C678DD;">--</span><span style="color:#ABB2BF;"> ;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 栈顶的值</span></span>
<span class="line"><span style="color:#E5C07B;">stk</span><span style="color:#ABB2BF;">[tt];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 判断栈是否为空，如果 tt &gt; 0，则表示不为空</span></span>
<span class="line"><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (tt </span><span style="color:#C678DD;">&gt;</span><span style="color:#D19A66;"> 0</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#ABB2BF;">——————————————————————————————</span></span>
<span class="line"><span style="color:#ABB2BF;">普通队列</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// hh 表示队头，tt表示队尾</span></span>
<span class="line"><span style="color:#C678DD;">int</span><span style="color:#E5C07B;"> q</span><span style="color:#ABB2BF;">[N], hh </span><span style="color:#C678DD;">=</span><span style="color:#D19A66;"> 0</span><span style="color:#ABB2BF;">, tt </span><span style="color:#C678DD;">=</span><span style="color:#C678DD;"> -</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 向队尾插入一个数</span></span>
<span class="line"><span style="color:#E5C07B;">q</span><span style="color:#ABB2BF;">[ </span><span style="color:#C678DD;">++</span><span style="color:#ABB2BF;"> tt] </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> x;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 从队头弹出一个数</span></span>
<span class="line"><span style="color:#ABB2BF;">hh </span><span style="color:#C678DD;">++</span><span style="color:#ABB2BF;"> ;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 队头的值</span></span>
<span class="line"><span style="color:#E5C07B;">q</span><span style="color:#ABB2BF;">[hh];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 判断队列是否为空，如果 hh &lt;= tt，则表示不为空</span></span>
<span class="line"><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (hh </span><span style="color:#C678DD;">&lt;=</span><span style="color:#ABB2BF;"> tt)</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#ABB2BF;">——————————————————————————————</span></span>
<span class="line"><span style="color:#ABB2BF;">循环队列</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// hh 表示队头，tt表示队尾的后一个位置</span></span>
<span class="line"><span style="color:#C678DD;">int</span><span style="color:#E5C07B;"> q</span><span style="color:#ABB2BF;">[N], hh </span><span style="color:#C678DD;">=</span><span style="color:#D19A66;"> 0</span><span style="color:#ABB2BF;">, tt </span><span style="color:#C678DD;">=</span><span style="color:#D19A66;"> 0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 向队尾插入一个数</span></span>
<span class="line"><span style="color:#E5C07B;">q</span><span style="color:#ABB2BF;">[tt </span><span style="color:#C678DD;">++</span><span style="color:#ABB2BF;"> ] </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> x;</span></span>
<span class="line"><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (tt </span><span style="color:#C678DD;">==</span><span style="color:#ABB2BF;"> N) tt </span><span style="color:#C678DD;">=</span><span style="color:#D19A66;"> 0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 从队头弹出一个数</span></span>
<span class="line"><span style="color:#ABB2BF;">hh </span><span style="color:#C678DD;">++</span><span style="color:#ABB2BF;"> ;</span></span>
<span class="line"><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (hh </span><span style="color:#C678DD;">==</span><span style="color:#ABB2BF;"> N) hh </span><span style="color:#C678DD;">=</span><span style="color:#D19A66;"> 0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 队头的值</span></span>
<span class="line"><span style="color:#E5C07B;">q</span><span style="color:#ABB2BF;">[hh];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 判断队列是否为空，如果hh != tt，则表示不为空</span></span>
<span class="line"><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (hh </span><span style="color:#C678DD;">!=</span><span style="color:#ABB2BF;"> tt)</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#ABB2BF;">——————————————————————————————</span></span>
<span class="line"><span style="color:#ABB2BF;">单调栈 </span></span>
<span class="line"><span style="color:#ABB2BF;">常见模型：找出每个数左边离它最近的比它大</span><span style="color:#C678DD;">/</span><span style="color:#ABB2BF;">小的数</span></span>
<span class="line"><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> tt </span><span style="color:#C678DD;">=</span><span style="color:#D19A66;"> 0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;">for</span><span style="color:#ABB2BF;"> (</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> i </span><span style="color:#C678DD;">=</span><span style="color:#D19A66;"> 1</span><span style="color:#ABB2BF;">; i </span><span style="color:#C678DD;">&lt;=</span><span style="color:#ABB2BF;"> n; i </span><span style="color:#C678DD;">++</span><span style="color:#ABB2BF;"> )</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#C678DD;">    while</span><span style="color:#ABB2BF;"> (tt </span><span style="color:#56B6C2;">&amp;&amp;</span><span style="color:#61AFEF;"> check</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">stk</span><span style="color:#ABB2BF;">[tt], i)) tt </span><span style="color:#C678DD;">--</span><span style="color:#ABB2BF;"> ;</span></span>
<span class="line"><span style="color:#E5C07B;">    stk</span><span style="color:#ABB2BF;">[ </span><span style="color:#C678DD;">++</span><span style="color:#ABB2BF;"> tt] </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> i;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">_____________________________________________________________</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">单调队列 </span></span>
<span class="line"><span style="color:#ABB2BF;">常见模型：找出滑动窗口中的最大值</span><span style="color:#C678DD;">/</span><span style="color:#ABB2BF;">最小值</span></span>
<span class="line"><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> hh </span><span style="color:#C678DD;">=</span><span style="color:#D19A66;"> 0</span><span style="color:#ABB2BF;">, tt </span><span style="color:#C678DD;">=</span><span style="color:#C678DD;"> -</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;">for</span><span style="color:#ABB2BF;"> (</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> i </span><span style="color:#C678DD;">=</span><span style="color:#D19A66;"> 0</span><span style="color:#ABB2BF;">; i </span><span style="color:#C678DD;">&lt;</span><span style="color:#ABB2BF;"> n; i </span><span style="color:#C678DD;">++</span><span style="color:#ABB2BF;"> )</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#C678DD;">    while</span><span style="color:#ABB2BF;"> (hh </span><span style="color:#C678DD;">&lt;=</span><span style="color:#ABB2BF;"> tt </span><span style="color:#56B6C2;">&amp;&amp;</span><span style="color:#61AFEF;"> check_out</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">q</span><span style="color:#ABB2BF;">[hh])) hh </span><span style="color:#C678DD;">++</span><span style="color:#ABB2BF;"> ;</span><span style="color:#7F848E;font-style:italic;">  // 判断队头是否滑出窗口</span></span>
<span class="line"><span style="color:#C678DD;">    while</span><span style="color:#ABB2BF;"> (hh </span><span style="color:#C678DD;">&lt;=</span><span style="color:#ABB2BF;"> tt </span><span style="color:#56B6C2;">&amp;&amp;</span><span style="color:#61AFEF;"> check</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">q</span><span style="color:#ABB2BF;">[tt], i)) tt </span><span style="color:#C678DD;">--</span><span style="color:#ABB2BF;"> ;</span></span>
<span class="line"><span style="color:#E5C07B;">    q</span><span style="color:#ABB2BF;">[ </span><span style="color:#C678DD;">++</span><span style="color:#ABB2BF;"> tt] </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> i;</span></span>
<span class="line"><span style="color:#ABB2BF;">}	</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">_______________________________________________________________</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">KMP</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// s[]是长文本，p[]是模式串，n是s的长度，m是p的长度</span></span>
<span class="line"><span style="color:#ABB2BF;">求模式串的Next数组：</span></span>
<span class="line"><span style="color:#C678DD;">for</span><span style="color:#ABB2BF;"> (</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> i </span><span style="color:#C678DD;">=</span><span style="color:#D19A66;"> 2</span><span style="color:#ABB2BF;">, j </span><span style="color:#C678DD;">=</span><span style="color:#D19A66;"> 0</span><span style="color:#ABB2BF;">; i </span><span style="color:#C678DD;">&lt;=</span><span style="color:#ABB2BF;"> m; i </span><span style="color:#C678DD;">++</span><span style="color:#ABB2BF;"> )</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#C678DD;">    while</span><span style="color:#ABB2BF;"> (j </span><span style="color:#56B6C2;">&amp;&amp;</span><span style="color:#E5C07B;"> p</span><span style="color:#ABB2BF;">[i] </span><span style="color:#C678DD;">!=</span><span style="color:#E5C07B;"> p</span><span style="color:#ABB2BF;">[j </span><span style="color:#C678DD;">+</span><span style="color:#D19A66;"> 1</span><span style="color:#ABB2BF;">]) j </span><span style="color:#C678DD;">=</span><span style="color:#E5C07B;"> ne</span><span style="color:#ABB2BF;">[j];</span></span>
<span class="line"><span style="color:#C678DD;">    if</span><span style="color:#ABB2BF;"> (</span><span style="color:#E5C07B;">p</span><span style="color:#ABB2BF;">[i] </span><span style="color:#C678DD;">==</span><span style="color:#E5C07B;"> p</span><span style="color:#ABB2BF;">[j </span><span style="color:#C678DD;">+</span><span style="color:#D19A66;"> 1</span><span style="color:#ABB2BF;">]) j </span><span style="color:#C678DD;">++</span><span style="color:#ABB2BF;"> ;</span></span>
<span class="line"><span style="color:#E5C07B;">    ne</span><span style="color:#ABB2BF;">[i] </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> j;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 匹配</span></span>
<span class="line"><span style="color:#C678DD;">for</span><span style="color:#ABB2BF;"> (</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> i </span><span style="color:#C678DD;">=</span><span style="color:#D19A66;"> 1</span><span style="color:#ABB2BF;">, j </span><span style="color:#C678DD;">=</span><span style="color:#D19A66;"> 0</span><span style="color:#ABB2BF;">; i </span><span style="color:#C678DD;">&lt;=</span><span style="color:#ABB2BF;"> n; i </span><span style="color:#C678DD;">++</span><span style="color:#ABB2BF;"> )</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#C678DD;">    while</span><span style="color:#ABB2BF;"> (j </span><span style="color:#56B6C2;">&amp;&amp;</span><span style="color:#E5C07B;"> s</span><span style="color:#ABB2BF;">[i] </span><span style="color:#C678DD;">!=</span><span style="color:#E5C07B;"> p</span><span style="color:#ABB2BF;">[j </span><span style="color:#C678DD;">+</span><span style="color:#D19A66;"> 1</span><span style="color:#ABB2BF;">]) j </span><span style="color:#C678DD;">=</span><span style="color:#E5C07B;"> ne</span><span style="color:#ABB2BF;">[j];</span></span>
<span class="line"><span style="color:#C678DD;">    if</span><span style="color:#ABB2BF;"> (</span><span style="color:#E5C07B;">s</span><span style="color:#ABB2BF;">[i] </span><span style="color:#C678DD;">==</span><span style="color:#E5C07B;"> p</span><span style="color:#ABB2BF;">[j </span><span style="color:#C678DD;">+</span><span style="color:#D19A66;"> 1</span><span style="color:#ABB2BF;">]) j </span><span style="color:#C678DD;">++</span><span style="color:#ABB2BF;"> ;</span></span>
<span class="line"><span style="color:#C678DD;">    if</span><span style="color:#ABB2BF;"> (j </span><span style="color:#C678DD;">==</span><span style="color:#ABB2BF;"> m)</span></span>
<span class="line"><span style="color:#ABB2BF;">    {</span></span>
<span class="line"><span style="color:#ABB2BF;">        j </span><span style="color:#C678DD;">=</span><span style="color:#E5C07B;"> ne</span><span style="color:#ABB2BF;">[j];</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">        // 匹配成功后的逻辑</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">_________________________________________________________________</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">Trie树 </span></span>
<span class="line"><span style="color:#C678DD;">int</span><span style="color:#E5C07B;"> son</span><span style="color:#ABB2BF;">[N][</span><span style="color:#D19A66;">26</span><span style="color:#ABB2BF;">], </span><span style="color:#E5C07B;">cnt</span><span style="color:#ABB2BF;">[N], idx;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 0号点既是根节点，又是空节点</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// son[][]存储树中每个节点的子节点</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// cnt[]存储以每个节点结尾的单词数量</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 插入一个字符串</span></span>
<span class="line"><span style="color:#C678DD;">void</span><span style="color:#61AFEF;"> insert</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">char</span><span style="color:#C678DD;"> *</span><span style="color:#E06C75;font-style:italic;">str</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#C678DD;">    int</span><span style="color:#ABB2BF;"> p </span><span style="color:#C678DD;">=</span><span style="color:#D19A66;"> 0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;">    for</span><span style="color:#ABB2BF;"> (</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> i </span><span style="color:#C678DD;">=</span><span style="color:#D19A66;"> 0</span><span style="color:#ABB2BF;">; </span><span style="color:#E5C07B;">str</span><span style="color:#ABB2BF;">[i]; i </span><span style="color:#C678DD;">++</span><span style="color:#ABB2BF;"> )</span></span>
<span class="line"><span style="color:#ABB2BF;">    {</span></span>
<span class="line"><span style="color:#C678DD;">        int</span><span style="color:#ABB2BF;"> u </span><span style="color:#C678DD;">=</span><span style="color:#E5C07B;"> str</span><span style="color:#ABB2BF;">[i] </span><span style="color:#C678DD;">-</span><span style="color:#98C379;"> &#39;a&#39;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;">        if</span><span style="color:#ABB2BF;"> (</span><span style="color:#56B6C2;">!</span><span style="color:#E5C07B;">son</span><span style="color:#ABB2BF;">[p][u]) </span><span style="color:#E5C07B;">son</span><span style="color:#ABB2BF;">[p][u] </span><span style="color:#C678DD;">=</span><span style="color:#C678DD;"> ++</span><span style="color:#ABB2BF;"> idx;</span></span>
<span class="line"><span style="color:#ABB2BF;">        p </span><span style="color:#C678DD;">=</span><span style="color:#E5C07B;"> son</span><span style="color:#ABB2BF;">[p][u];</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#E5C07B;">    cnt</span><span style="color:#ABB2BF;">[p] </span><span style="color:#C678DD;">++</span><span style="color:#ABB2BF;"> ;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 查询字符串出现的次数</span></span>
<span class="line"><span style="color:#C678DD;">int</span><span style="color:#61AFEF;"> query</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">char</span><span style="color:#C678DD;"> *</span><span style="color:#E06C75;font-style:italic;">str</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#C678DD;">    int</span><span style="color:#ABB2BF;"> p </span><span style="color:#C678DD;">=</span><span style="color:#D19A66;"> 0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;">    for</span><span style="color:#ABB2BF;"> (</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> i </span><span style="color:#C678DD;">=</span><span style="color:#D19A66;"> 0</span><span style="color:#ABB2BF;">; </span><span style="color:#E5C07B;">str</span><span style="color:#ABB2BF;">[i]; i </span><span style="color:#C678DD;">++</span><span style="color:#ABB2BF;"> )</span></span>
<span class="line"><span style="color:#ABB2BF;">    {</span></span>
<span class="line"><span style="color:#C678DD;">        int</span><span style="color:#ABB2BF;"> u </span><span style="color:#C678DD;">=</span><span style="color:#E5C07B;"> str</span><span style="color:#ABB2BF;">[i] </span><span style="color:#C678DD;">-</span><span style="color:#98C379;"> &#39;a&#39;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;">        if</span><span style="color:#ABB2BF;"> (</span><span style="color:#56B6C2;">!</span><span style="color:#E5C07B;">son</span><span style="color:#ABB2BF;">[p][u]) </span><span style="color:#C678DD;">return</span><span style="color:#D19A66;"> 0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">        p </span><span style="color:#C678DD;">=</span><span style="color:#E5C07B;"> son</span><span style="color:#ABB2BF;">[p][u];</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#C678DD;">    return</span><span style="color:#E5C07B;"> cnt</span><span style="color:#ABB2BF;">[p];</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">_____________________________________________________</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">int</span><span style="color:#E5C07B;"> son</span><span style="color:#ABB2BF;">[N][</span><span style="color:#D19A66;">26</span><span style="color:#ABB2BF;">], </span><span style="color:#E5C07B;">cnt</span><span style="color:#ABB2BF;">[N], idx;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 0号点既是根节点，又是空节点</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// son[][]存储树中每个节点的子节点</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// cnt[]存储以每个节点结尾的单词数量</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 插入一个字符串</span></span>
<span class="line"><span style="color:#C678DD;">void</span><span style="color:#61AFEF;"> insert</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">char</span><span style="color:#C678DD;"> *</span><span style="color:#E06C75;font-style:italic;">str</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#C678DD;">    int</span><span style="color:#ABB2BF;"> p </span><span style="color:#C678DD;">=</span><span style="color:#D19A66;"> 0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;">    for</span><span style="color:#ABB2BF;"> (</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> i </span><span style="color:#C678DD;">=</span><span style="color:#D19A66;"> 0</span><span style="color:#ABB2BF;">; </span><span style="color:#E5C07B;">str</span><span style="color:#ABB2BF;">[i]; i </span><span style="color:#C678DD;">++</span><span style="color:#ABB2BF;"> )</span></span>
<span class="line"><span style="color:#ABB2BF;">    {</span></span>
<span class="line"><span style="color:#C678DD;">        int</span><span style="color:#ABB2BF;"> u </span><span style="color:#C678DD;">=</span><span style="color:#E5C07B;"> str</span><span style="color:#ABB2BF;">[i] </span><span style="color:#C678DD;">-</span><span style="color:#98C379;"> &#39;a&#39;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;">        if</span><span style="color:#ABB2BF;"> (</span><span style="color:#56B6C2;">!</span><span style="color:#E5C07B;">son</span><span style="color:#ABB2BF;">[p][u]) </span><span style="color:#E5C07B;">son</span><span style="color:#ABB2BF;">[p][u] </span><span style="color:#C678DD;">=</span><span style="color:#C678DD;"> ++</span><span style="color:#ABB2BF;"> idx;</span></span>
<span class="line"><span style="color:#ABB2BF;">        p </span><span style="color:#C678DD;">=</span><span style="color:#E5C07B;"> son</span><span style="color:#ABB2BF;">[p][u];</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#E5C07B;">    cnt</span><span style="color:#ABB2BF;">[p] </span><span style="color:#C678DD;">++</span><span style="color:#ABB2BF;"> ;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 查询字符串出现的次数</span></span>
<span class="line"><span style="color:#C678DD;">int</span><span style="color:#61AFEF;"> query</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">char</span><span style="color:#C678DD;"> *</span><span style="color:#E06C75;font-style:italic;">str</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#C678DD;">    int</span><span style="color:#ABB2BF;"> p </span><span style="color:#C678DD;">=</span><span style="color:#D19A66;"> 0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;">    for</span><span style="color:#ABB2BF;"> (</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> i </span><span style="color:#C678DD;">=</span><span style="color:#D19A66;"> 0</span><span style="color:#ABB2BF;">; </span><span style="color:#E5C07B;">str</span><span style="color:#ABB2BF;">[i]; i </span><span style="color:#C678DD;">++</span><span style="color:#ABB2BF;"> )</span></span>
<span class="line"><span style="color:#ABB2BF;">    {</span></span>
<span class="line"><span style="color:#C678DD;">        int</span><span style="color:#ABB2BF;"> u </span><span style="color:#C678DD;">=</span><span style="color:#E5C07B;"> str</span><span style="color:#ABB2BF;">[i] </span><span style="color:#C678DD;">-</span><span style="color:#98C379;"> &#39;a&#39;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;">        if</span><span style="color:#ABB2BF;"> (</span><span style="color:#56B6C2;">!</span><span style="color:#E5C07B;">son</span><span style="color:#ABB2BF;">[p][u]) </span><span style="color:#C678DD;">return</span><span style="color:#D19A66;"> 0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">        p </span><span style="color:#C678DD;">=</span><span style="color:#E5C07B;"> son</span><span style="color:#ABB2BF;">[p][u];</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#C678DD;">    return</span><span style="color:#E5C07B;"> cnt</span><span style="color:#ABB2BF;">[p];</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">___________________________________________________________</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">)朴素并查集：</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">    int</span><span style="color:#E5C07B;"> p</span><span style="color:#ABB2BF;">[N];</span><span style="color:#7F848E;font-style:italic;"> //存储每个点的祖宗节点</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">    // 返回x的祖宗节点</span></span>
<span class="line"><span style="color:#C678DD;">    int</span><span style="color:#61AFEF;"> find</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">int</span><span style="color:#E06C75;font-style:italic;"> x</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">    {</span></span>
<span class="line"><span style="color:#C678DD;">        if</span><span style="color:#ABB2BF;"> (</span><span style="color:#E5C07B;">p</span><span style="color:#ABB2BF;">[x] </span><span style="color:#C678DD;">!=</span><span style="color:#ABB2BF;"> x) </span><span style="color:#E5C07B;">p</span><span style="color:#ABB2BF;">[x] </span><span style="color:#C678DD;">=</span><span style="color:#61AFEF;"> find</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">p</span><span style="color:#ABB2BF;">[x]);</span></span>
<span class="line"><span style="color:#C678DD;">        return</span><span style="color:#E5C07B;"> p</span><span style="color:#ABB2BF;">[x];</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">    // 初始化，假定节点编号是1~n</span></span>
<span class="line"><span style="color:#C678DD;">    for</span><span style="color:#ABB2BF;"> (</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> i </span><span style="color:#C678DD;">=</span><span style="color:#D19A66;"> 1</span><span style="color:#ABB2BF;">; i </span><span style="color:#C678DD;">&lt;=</span><span style="color:#ABB2BF;"> n; i </span><span style="color:#C678DD;">++</span><span style="color:#ABB2BF;"> ) </span><span style="color:#E5C07B;">p</span><span style="color:#ABB2BF;">[i] </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> i;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">    // 合并a和b所在的两个集合：</span></span>
<span class="line"><span style="color:#E5C07B;">    p</span><span style="color:#ABB2BF;">[</span><span style="color:#61AFEF;">find</span><span style="color:#ABB2BF;">(a)] </span><span style="color:#C678DD;">=</span><span style="color:#61AFEF;"> find</span><span style="color:#ABB2BF;">(b);</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">)维护size的并查集：</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">    int</span><span style="color:#E5C07B;"> p</span><span style="color:#ABB2BF;">[N], </span><span style="color:#E5C07B;">size</span><span style="color:#ABB2BF;">[N];</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">    //p[]存储每个点的祖宗节点, size[]只有祖宗节点的有意义，表示祖宗节点所在集合中的点的数量</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">    // 返回x的祖宗节点</span></span>
<span class="line"><span style="color:#C678DD;">    int</span><span style="color:#61AFEF;"> find</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">int</span><span style="color:#E06C75;font-style:italic;"> x</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">    {</span></span>
<span class="line"><span style="color:#C678DD;">        if</span><span style="color:#ABB2BF;"> (</span><span style="color:#E5C07B;">p</span><span style="color:#ABB2BF;">[x] </span><span style="color:#C678DD;">!=</span><span style="color:#ABB2BF;"> x) </span><span style="color:#E5C07B;">p</span><span style="color:#ABB2BF;">[x] </span><span style="color:#C678DD;">=</span><span style="color:#61AFEF;"> find</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">p</span><span style="color:#ABB2BF;">[x]);</span></span>
<span class="line"><span style="color:#C678DD;">        return</span><span style="color:#E5C07B;"> p</span><span style="color:#ABB2BF;">[x];</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">    // 初始化，假定节点编号是1~n</span></span>
<span class="line"><span style="color:#C678DD;">    for</span><span style="color:#ABB2BF;"> (</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> i </span><span style="color:#C678DD;">=</span><span style="color:#D19A66;"> 1</span><span style="color:#ABB2BF;">; i </span><span style="color:#C678DD;">&lt;=</span><span style="color:#ABB2BF;"> n; i </span><span style="color:#C678DD;">++</span><span style="color:#ABB2BF;"> )</span></span>
<span class="line"><span style="color:#ABB2BF;">    {</span></span>
<span class="line"><span style="color:#E5C07B;">        p</span><span style="color:#ABB2BF;">[i] </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> i;</span></span>
<span class="line"><span style="color:#E5C07B;">        size</span><span style="color:#ABB2BF;">[i] </span><span style="color:#C678DD;">=</span><span style="color:#D19A66;"> 1</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">    // 合并a和b所在的两个集合：</span></span>
<span class="line"><span style="color:#E5C07B;">    size</span><span style="color:#ABB2BF;">[</span><span style="color:#61AFEF;">find</span><span style="color:#ABB2BF;">(b)] </span><span style="color:#C678DD;">+=</span><span style="color:#E5C07B;"> size</span><span style="color:#ABB2BF;">[</span><span style="color:#61AFEF;">find</span><span style="color:#ABB2BF;">(a)];</span></span>
<span class="line"><span style="color:#E5C07B;">    p</span><span style="color:#ABB2BF;">[</span><span style="color:#61AFEF;">find</span><span style="color:#ABB2BF;">(a)] </span><span style="color:#C678DD;">=</span><span style="color:#61AFEF;"> find</span><span style="color:#ABB2BF;">(b);</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">3</span><span style="color:#ABB2BF;">)维护到祖宗节点距离的并查集：</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">    int</span><span style="color:#E5C07B;"> p</span><span style="color:#ABB2BF;">[N], </span><span style="color:#E5C07B;">d</span><span style="color:#ABB2BF;">[N];</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">    //p[]存储每个点的祖宗节点, d[x]存储x到p[x]的距离</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">    // 返回x的祖宗节点</span></span>
<span class="line"><span style="color:#C678DD;">    int</span><span style="color:#61AFEF;"> find</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">int</span><span style="color:#E06C75;font-style:italic;"> x</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">    {</span></span>
<span class="line"><span style="color:#C678DD;">        if</span><span style="color:#ABB2BF;"> (</span><span style="color:#E5C07B;">p</span><span style="color:#ABB2BF;">[x] </span><span style="color:#C678DD;">!=</span><span style="color:#ABB2BF;"> x)</span></span>
<span class="line"><span style="color:#ABB2BF;">        {</span></span>
<span class="line"><span style="color:#C678DD;">            int</span><span style="color:#ABB2BF;"> u </span><span style="color:#C678DD;">=</span><span style="color:#61AFEF;"> find</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">p</span><span style="color:#ABB2BF;">[x]);</span></span>
<span class="line"><span style="color:#E5C07B;">            d</span><span style="color:#ABB2BF;">[x] </span><span style="color:#C678DD;">+=</span><span style="color:#E5C07B;"> d</span><span style="color:#ABB2BF;">[</span><span style="color:#E5C07B;">p</span><span style="color:#ABB2BF;">[x]];</span></span>
<span class="line"><span style="color:#E5C07B;">            p</span><span style="color:#ABB2BF;">[x] </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> u;</span></span>
<span class="line"><span style="color:#ABB2BF;">        }</span></span>
<span class="line"><span style="color:#C678DD;">        return</span><span style="color:#E5C07B;"> p</span><span style="color:#ABB2BF;">[x];</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">    // 初始化，假定节点编号是1~n</span></span>
<span class="line"><span style="color:#C678DD;">    for</span><span style="color:#ABB2BF;"> (</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> i </span><span style="color:#C678DD;">=</span><span style="color:#D19A66;"> 1</span><span style="color:#ABB2BF;">; i </span><span style="color:#C678DD;">&lt;=</span><span style="color:#ABB2BF;"> n; i </span><span style="color:#C678DD;">++</span><span style="color:#ABB2BF;"> )</span></span>
<span class="line"><span style="color:#ABB2BF;">    {</span></span>
<span class="line"><span style="color:#E5C07B;">        p</span><span style="color:#ABB2BF;">[i] </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> i;</span></span>
<span class="line"><span style="color:#E5C07B;">        d</span><span style="color:#ABB2BF;">[i] </span><span style="color:#C678DD;">=</span><span style="color:#D19A66;"> 0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">    // 合并a和b所在的两个集合：</span></span>
<span class="line"><span style="color:#E5C07B;">    p</span><span style="color:#ABB2BF;">[</span><span style="color:#61AFEF;">find</span><span style="color:#ABB2BF;">(a)] </span><span style="color:#C678DD;">=</span><span style="color:#61AFEF;"> find</span><span style="color:#ABB2BF;">(b);</span></span>
<span class="line"><span style="color:#E5C07B;">    d</span><span style="color:#ABB2BF;">[</span><span style="color:#61AFEF;">find</span><span style="color:#ABB2BF;">(a)] </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> distance;</span><span style="color:#7F848E;font-style:italic;"> // 根据具体问题，初始化find(a)的偏移量</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">_______________________________________________________________________</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">堆</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// h[N]存储堆中的值, h[1]是堆顶，x的左儿子是2x, 右儿子是2x + 1</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// ph[k]存储第k个插入的点在堆中的位置</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// hp[k]存储堆中下标是k的点是第几个插入的</span></span>
<span class="line"><span style="color:#C678DD;">int</span><span style="color:#E5C07B;"> h</span><span style="color:#ABB2BF;">[N], </span><span style="color:#E5C07B;">ph</span><span style="color:#ABB2BF;">[N], </span><span style="color:#E5C07B;">hp</span><span style="color:#ABB2BF;">[N], size;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 交换两个点，及其映射关系</span></span>
<span class="line"><span style="color:#C678DD;">void</span><span style="color:#61AFEF;"> heap_swap</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">int</span><span style="color:#E06C75;font-style:italic;"> a</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">int</span><span style="color:#E06C75;font-style:italic;"> b</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#61AFEF;">    swap</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">ph</span><span style="color:#ABB2BF;">[</span><span style="color:#E5C07B;">hp</span><span style="color:#ABB2BF;">[a]],</span><span style="color:#E5C07B;">ph</span><span style="color:#ABB2BF;">[</span><span style="color:#E5C07B;">hp</span><span style="color:#ABB2BF;">[b]]);</span></span>
<span class="line"><span style="color:#61AFEF;">    swap</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">hp</span><span style="color:#ABB2BF;">[a], </span><span style="color:#E5C07B;">hp</span><span style="color:#ABB2BF;">[b]);</span></span>
<span class="line"><span style="color:#61AFEF;">    swap</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">h</span><span style="color:#ABB2BF;">[a], </span><span style="color:#E5C07B;">h</span><span style="color:#ABB2BF;">[b]);</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">void</span><span style="color:#61AFEF;"> down</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">int</span><span style="color:#E06C75;font-style:italic;"> u</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#C678DD;">    int</span><span style="color:#ABB2BF;"> t </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> u;</span></span>
<span class="line"><span style="color:#C678DD;">    if</span><span style="color:#ABB2BF;"> (u </span><span style="color:#C678DD;">*</span><span style="color:#D19A66;"> 2</span><span style="color:#C678DD;"> &lt;=</span><span style="color:#ABB2BF;"> size </span><span style="color:#56B6C2;">&amp;&amp;</span><span style="color:#E5C07B;"> h</span><span style="color:#ABB2BF;">[u </span><span style="color:#C678DD;">*</span><span style="color:#D19A66;"> 2</span><span style="color:#ABB2BF;">] </span><span style="color:#C678DD;">&lt;</span><span style="color:#E5C07B;"> h</span><span style="color:#ABB2BF;">[t]) t </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> u </span><span style="color:#C678DD;">*</span><span style="color:#D19A66;"> 2</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;">    if</span><span style="color:#ABB2BF;"> (u </span><span style="color:#C678DD;">*</span><span style="color:#D19A66;"> 2</span><span style="color:#C678DD;"> +</span><span style="color:#D19A66;"> 1</span><span style="color:#C678DD;"> &lt;=</span><span style="color:#ABB2BF;"> size </span><span style="color:#56B6C2;">&amp;&amp;</span><span style="color:#E5C07B;"> h</span><span style="color:#ABB2BF;">[u </span><span style="color:#C678DD;">*</span><span style="color:#D19A66;"> 2</span><span style="color:#C678DD;"> +</span><span style="color:#D19A66;"> 1</span><span style="color:#ABB2BF;">] </span><span style="color:#C678DD;">&lt;</span><span style="color:#E5C07B;"> h</span><span style="color:#ABB2BF;">[t]) t </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> u </span><span style="color:#C678DD;">*</span><span style="color:#D19A66;"> 2</span><span style="color:#C678DD;"> +</span><span style="color:#D19A66;"> 1</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;">    if</span><span style="color:#ABB2BF;"> (u </span><span style="color:#C678DD;">!=</span><span style="color:#ABB2BF;"> t)</span></span>
<span class="line"><span style="color:#ABB2BF;">    {</span></span>
<span class="line"><span style="color:#61AFEF;">        heap_swap</span><span style="color:#ABB2BF;">(u, t);</span></span>
<span class="line"><span style="color:#61AFEF;">        down</span><span style="color:#ABB2BF;">(t);</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">void</span><span style="color:#61AFEF;"> up</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">int</span><span style="color:#E06C75;font-style:italic;"> u</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#C678DD;">    while</span><span style="color:#ABB2BF;"> (u </span><span style="color:#C678DD;">/</span><span style="color:#D19A66;"> 2</span><span style="color:#56B6C2;"> &amp;&amp;</span><span style="color:#E5C07B;"> h</span><span style="color:#ABB2BF;">[u] </span><span style="color:#C678DD;">&lt;</span><span style="color:#E5C07B;"> h</span><span style="color:#ABB2BF;">[u </span><span style="color:#C678DD;">/</span><span style="color:#D19A66;"> 2</span><span style="color:#ABB2BF;">])</span></span>
<span class="line"><span style="color:#ABB2BF;">    {</span></span>
<span class="line"><span style="color:#61AFEF;">        heap_swap</span><span style="color:#ABB2BF;">(u, u </span><span style="color:#C678DD;">/</span><span style="color:#D19A66;"> 2</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">        u </span><span style="color:#C678DD;">&gt;&gt;=</span><span style="color:#D19A66;"> 1</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// O(n)建堆</span></span>
<span class="line"><span style="color:#C678DD;">for</span><span style="color:#ABB2BF;"> (</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> i </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> n </span><span style="color:#C678DD;">/</span><span style="color:#D19A66;"> 2</span><span style="color:#ABB2BF;">; i; i </span><span style="color:#C678DD;">--</span><span style="color:#ABB2BF;"> ) </span><span style="color:#61AFEF;">down</span><span style="color:#ABB2BF;">(i);</span></span>
<span class="line"><span style="color:#ABB2BF;">——————————————————————————————————</span></span>
<span class="line"><span style="color:#ABB2BF;">一般哈希</span></span>
<span class="line"><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">) 拉链法</span></span>
<span class="line"><span style="color:#C678DD;">    int</span><span style="color:#E5C07B;"> h</span><span style="color:#ABB2BF;">[N], </span><span style="color:#E5C07B;">e</span><span style="color:#ABB2BF;">[N], </span><span style="color:#E5C07B;">ne</span><span style="color:#ABB2BF;">[N], idx;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">    // 向哈希表中插入一个数</span></span>
<span class="line"><span style="color:#C678DD;">    void</span><span style="color:#61AFEF;"> insert</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">int</span><span style="color:#E06C75;font-style:italic;"> x</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">    {</span></span>
<span class="line"><span style="color:#C678DD;">        int</span><span style="color:#ABB2BF;"> k </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> (x </span><span style="color:#C678DD;">%</span><span style="color:#ABB2BF;"> N </span><span style="color:#C678DD;">+</span><span style="color:#ABB2BF;"> N) </span><span style="color:#C678DD;">%</span><span style="color:#ABB2BF;"> N;</span></span>
<span class="line"><span style="color:#E5C07B;">        e</span><span style="color:#ABB2BF;">[idx] </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> x;</span></span>
<span class="line"><span style="color:#E5C07B;">        ne</span><span style="color:#ABB2BF;">[idx] </span><span style="color:#C678DD;">=</span><span style="color:#E5C07B;"> h</span><span style="color:#ABB2BF;">[k];</span></span>
<span class="line"><span style="color:#E5C07B;">        h</span><span style="color:#ABB2BF;">[k] </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> idx </span><span style="color:#C678DD;">++</span><span style="color:#ABB2BF;"> ;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">    // 在哈希表中查询某个数是否存在</span></span>
<span class="line"><span style="color:#C678DD;">    bool</span><span style="color:#61AFEF;"> find</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">int</span><span style="color:#E06C75;font-style:italic;"> x</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">    {</span></span>
<span class="line"><span style="color:#C678DD;">        int</span><span style="color:#ABB2BF;"> k </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> (x </span><span style="color:#C678DD;">%</span><span style="color:#ABB2BF;"> N </span><span style="color:#C678DD;">+</span><span style="color:#ABB2BF;"> N) </span><span style="color:#C678DD;">%</span><span style="color:#ABB2BF;"> N;</span></span>
<span class="line"><span style="color:#C678DD;">        for</span><span style="color:#ABB2BF;"> (</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> i </span><span style="color:#C678DD;">=</span><span style="color:#E5C07B;"> h</span><span style="color:#ABB2BF;">[k]; i </span><span style="color:#C678DD;">!=</span><span style="color:#C678DD;"> -</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">; i </span><span style="color:#C678DD;">=</span><span style="color:#E5C07B;"> ne</span><span style="color:#ABB2BF;">[i])</span></span>
<span class="line"><span style="color:#C678DD;">            if</span><span style="color:#ABB2BF;"> (</span><span style="color:#E5C07B;">e</span><span style="color:#ABB2BF;">[i] </span><span style="color:#C678DD;">==</span><span style="color:#ABB2BF;"> x)</span></span>
<span class="line"><span style="color:#C678DD;">                return</span><span style="color:#D19A66;"> true</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span></span>
<span class="line"><span style="color:#C678DD;">        return</span><span style="color:#D19A66;"> false</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">) 开放寻址法</span></span>
<span class="line"><span style="color:#C678DD;">    int</span><span style="color:#E5C07B;"> h</span><span style="color:#ABB2BF;">[N];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">    // 如果x在哈希表中，返回x的下标；如果x不在哈希表中，返回x应该插入的位置</span></span>
<span class="line"><span style="color:#C678DD;">    int</span><span style="color:#61AFEF;"> find</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">int</span><span style="color:#E06C75;font-style:italic;"> x</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">    {</span></span>
<span class="line"><span style="color:#C678DD;">        int</span><span style="color:#ABB2BF;"> t </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> (x </span><span style="color:#C678DD;">%</span><span style="color:#ABB2BF;"> N </span><span style="color:#C678DD;">+</span><span style="color:#ABB2BF;"> N) </span><span style="color:#C678DD;">%</span><span style="color:#ABB2BF;"> N;</span></span>
<span class="line"><span style="color:#C678DD;">        while</span><span style="color:#ABB2BF;"> (</span><span style="color:#E5C07B;">h</span><span style="color:#ABB2BF;">[t] </span><span style="color:#C678DD;">!=</span><span style="color:#ABB2BF;"> null </span><span style="color:#56B6C2;">&amp;&amp;</span><span style="color:#E5C07B;"> h</span><span style="color:#ABB2BF;">[t] </span><span style="color:#C678DD;">!=</span><span style="color:#ABB2BF;"> x)</span></span>
<span class="line"><span style="color:#ABB2BF;">        {</span></span>
<span class="line"><span style="color:#ABB2BF;">            t </span><span style="color:#C678DD;">++</span><span style="color:#ABB2BF;"> ;</span></span>
<span class="line"><span style="color:#C678DD;">            if</span><span style="color:#ABB2BF;"> (t </span><span style="color:#C678DD;">==</span><span style="color:#ABB2BF;"> N) t </span><span style="color:#C678DD;">=</span><span style="color:#D19A66;"> 0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">        }</span></span>
<span class="line"><span style="color:#C678DD;">        return</span><span style="color:#ABB2BF;"> t;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">——————————————————————————————————————</span></span>
<span class="line"><span style="color:#ABB2BF;">字符串哈希</span></span>
<span class="line"><span style="color:#ABB2BF;">核心思想：将字符串看成P进制数，P的经验值是131或13331，取这两个值的冲突概率低</span></span>
<span class="line"><span style="color:#ABB2BF;">小技巧：取模的数用2</span><span style="color:#56B6C2;">^</span><span style="color:#D19A66;">64</span><span style="color:#ABB2BF;">，这样直接用unsigned </span><span style="color:#C678DD;">long</span><span style="color:#ABB2BF;"> long存储，溢出的结果就是取模的结果</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">typedef</span><span style="color:#C678DD;"> unsigned</span><span style="color:#C678DD;"> long</span><span style="color:#C678DD;"> long</span><span style="color:#ABB2BF;"> ULL;</span></span>
<span class="line"><span style="color:#ABB2BF;">ULL </span><span style="color:#E5C07B;">h</span><span style="color:#ABB2BF;">[N], </span><span style="color:#E5C07B;">p</span><span style="color:#ABB2BF;">[N];</span><span style="color:#7F848E;font-style:italic;"> // h[k]存储字符串前k个字母的哈希值, p[k]存储 P^k mod 2^64</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 初始化</span></span>
<span class="line"><span style="color:#E5C07B;">p</span><span style="color:#ABB2BF;">[</span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">] </span><span style="color:#C678DD;">=</span><span style="color:#D19A66;"> 1</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;">for</span><span style="color:#ABB2BF;"> (</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> i </span><span style="color:#C678DD;">=</span><span style="color:#D19A66;"> 1</span><span style="color:#ABB2BF;">; i </span><span style="color:#C678DD;">&lt;=</span><span style="color:#ABB2BF;"> n; i </span><span style="color:#C678DD;">++</span><span style="color:#ABB2BF;"> )</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#E5C07B;">    h</span><span style="color:#ABB2BF;">[i] </span><span style="color:#C678DD;">=</span><span style="color:#E5C07B;"> h</span><span style="color:#ABB2BF;">[i </span><span style="color:#C678DD;">-</span><span style="color:#D19A66;"> 1</span><span style="color:#ABB2BF;">] </span><span style="color:#C678DD;">*</span><span style="color:#ABB2BF;"> P </span><span style="color:#C678DD;">+</span><span style="color:#E5C07B;"> str</span><span style="color:#ABB2BF;">[i];</span></span>
<span class="line"><span style="color:#E5C07B;">    p</span><span style="color:#ABB2BF;">[i] </span><span style="color:#C678DD;">=</span><span style="color:#E5C07B;"> p</span><span style="color:#ABB2BF;">[i </span><span style="color:#C678DD;">-</span><span style="color:#D19A66;"> 1</span><span style="color:#ABB2BF;">] </span><span style="color:#C678DD;">*</span><span style="color:#ABB2BF;"> P;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 计算子串 str[l ~ r] 的哈希值</span></span>
<span class="line"><span style="color:#E5C07B;">ULL</span><span style="color:#61AFEF;"> get</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">int</span><span style="color:#E06C75;font-style:italic;"> l</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">int</span><span style="color:#E06C75;font-style:italic;"> r</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#C678DD;">    return</span><span style="color:#E5C07B;"> h</span><span style="color:#ABB2BF;">[r] </span><span style="color:#C678DD;">-</span><span style="color:#E5C07B;"> h</span><span style="color:#ABB2BF;">[l </span><span style="color:#C678DD;">-</span><span style="color:#D19A66;"> 1</span><span style="color:#ABB2BF;">] </span><span style="color:#C678DD;">*</span><span style="color:#E5C07B;"> p</span><span style="color:#ABB2BF;">[r </span><span style="color:#C678DD;">-</span><span style="color:#ABB2BF;"> l </span><span style="color:#C678DD;">+</span><span style="color:#D19A66;"> 1</span><span style="color:#ABB2BF;">];</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">————————————————————————————————————</span></span>
<span class="line"><span style="color:#ABB2BF;">C</span><span style="color:#C678DD;">++</span><span style="color:#ABB2BF;"> STL</span></span>
<span class="line"><span style="color:#ABB2BF;">vector, 变长数组，倍增的思想</span></span>
<span class="line"><span style="color:#61AFEF;">    size</span><span style="color:#ABB2BF;">()  返回元素个数</span></span>
<span class="line"><span style="color:#61AFEF;">    empty</span><span style="color:#ABB2BF;">()  返回是否为空</span></span>
<span class="line"><span style="color:#61AFEF;">    clear</span><span style="color:#ABB2BF;">()  清空</span></span>
<span class="line"><span style="color:#61AFEF;">    front</span><span style="color:#ABB2BF;">()</span><span style="color:#C678DD;">/</span><span style="color:#61AFEF;">back</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#61AFEF;">    push_back</span><span style="color:#ABB2BF;">()</span><span style="color:#C678DD;">/</span><span style="color:#61AFEF;">pop_back</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#61AFEF;">    begin</span><span style="color:#ABB2BF;">()</span><span style="color:#C678DD;">/</span><span style="color:#61AFEF;">end</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#ABB2BF;">    []</span></span>
<span class="line"><span style="color:#ABB2BF;">    支持比较运算，按字典序</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">pair&lt;int, int&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    first, 第一个元素</span></span>
<span class="line"><span style="color:#ABB2BF;">    second, 第二个元素</span></span>
<span class="line"><span style="color:#ABB2BF;">    支持比较运算，以first为第一关键字，以second为第二关键字（字典序）</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">string，字符串</span></span>
<span class="line"><span style="color:#ABB2BF;">    size()/length()  返回字符串长度</span></span>
<span class="line"><span style="color:#ABB2BF;">    empty()</span></span>
<span class="line"><span style="color:#ABB2BF;">    clear()</span></span>
<span class="line"><span style="color:#ABB2BF;">    substr(起始下标，(子串长度))  返回子串</span></span>
<span class="line"><span style="color:#ABB2BF;">    c_str()  返回字符串所在字符数组的起始地址</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">queue, 队列</span></span>
<span class="line"><span style="color:#ABB2BF;">    size()</span></span>
<span class="line"><span style="color:#ABB2BF;">    empty()</span></span>
<span class="line"><span style="color:#ABB2BF;">    push()  向队尾插入一个元素</span></span>
<span class="line"><span style="color:#ABB2BF;">    front()  返回队头元素</span></span>
<span class="line"><span style="color:#ABB2BF;">    back()  返回队尾元素</span></span>
<span class="line"><span style="color:#ABB2BF;">    pop()  弹出队头元素</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">priority_queue, 优先队列，默认是大根堆</span></span>
<span class="line"><span style="color:#ABB2BF;">    size()</span></span>
<span class="line"><span style="color:#ABB2BF;">    empty()</span></span>
<span class="line"><span style="color:#ABB2BF;">    push()  插入一个元素</span></span>
<span class="line"><span style="color:#ABB2BF;">    top()  返回堆顶元素</span></span>
<span class="line"><span style="color:#ABB2BF;">    pop()  弹出堆顶元素</span></span>
<span class="line"><span style="color:#ABB2BF;">    定义成小根堆的方式：priority_queue&lt;int, vector&lt;int&gt;, greater&lt;int&gt;&gt; q;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">stack, 栈</span></span>
<span class="line"><span style="color:#61AFEF;">    size</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#61AFEF;">    empty</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#61AFEF;">    push</span><span style="color:#ABB2BF;">()  向栈顶插入一个元素</span></span>
<span class="line"><span style="color:#61AFEF;">    top</span><span style="color:#ABB2BF;">()  返回栈顶元素</span></span>
<span class="line"><span style="color:#61AFEF;">    pop</span><span style="color:#ABB2BF;">()  弹出栈顶元素</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">deque, 双端队列</span></span>
<span class="line"><span style="color:#61AFEF;">    size</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#61AFEF;">    empty</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#61AFEF;">    clear</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#61AFEF;">    front</span><span style="color:#ABB2BF;">()</span><span style="color:#C678DD;">/</span><span style="color:#61AFEF;">back</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#61AFEF;">    push_back</span><span style="color:#ABB2BF;">()</span><span style="color:#C678DD;">/</span><span style="color:#61AFEF;">pop_back</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#61AFEF;">    push_front</span><span style="color:#ABB2BF;">()</span><span style="color:#C678DD;">/</span><span style="color:#61AFEF;">pop_front</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#61AFEF;">    begin</span><span style="color:#ABB2BF;">()</span><span style="color:#C678DD;">/</span><span style="color:#61AFEF;">end</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#ABB2BF;">    []</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">set, map, multiset, multimap, 基于平衡二叉树（红黑树），动态维护有序序列</span></span>
<span class="line"><span style="color:#ABB2BF;">    size()</span></span>
<span class="line"><span style="color:#ABB2BF;">    empty()</span></span>
<span class="line"><span style="color:#ABB2BF;">    clear()</span></span>
<span class="line"><span style="color:#ABB2BF;">    begin()/end()</span></span>
<span class="line"><span style="color:#ABB2BF;">    ++, -- 返回前驱和后继，时间复杂度 O(</span><span style="color:#E5C07B;">logn</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    set/multiset</span></span>
<span class="line"><span style="color:#ABB2BF;">        insert()  插入一个数</span></span>
<span class="line"><span style="color:#ABB2BF;">        find()  查找一个数</span></span>
<span class="line"><span style="color:#ABB2BF;">        count()  返回某一个数的个数</span></span>
<span class="line"><span style="color:#ABB2BF;">        erase()</span></span>
<span class="line"><span style="color:#ABB2BF;">            (1) 输入是一个数x，删除所有x   O(</span><span style="color:#E5C07B;">k</span><span style="color:#ABB2BF;"> + </span><span style="color:#E06C75;font-style:italic;">logn</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">            (2) 输入一个迭代器，删除这个迭代器</span></span>
<span class="line"><span style="color:#ABB2BF;">        lower_bound()/upper_bound()</span></span>
<span class="line"><span style="color:#ABB2BF;">            lower_bound(</span><span style="color:#E5C07B;">x</span><span style="color:#ABB2BF;">)  返回大于等于x的最小的数的迭代器</span></span>
<span class="line"><span style="color:#ABB2BF;">            upper_bound(</span><span style="color:#E5C07B;">x</span><span style="color:#ABB2BF;">)  返回大于x的最小的数的迭代器</span></span>
<span class="line"><span style="color:#ABB2BF;">    map/multimap</span></span>
<span class="line"><span style="color:#ABB2BF;">        insert()  插入的数是一个pair</span></span>
<span class="line"><span style="color:#ABB2BF;">        erase()  输入的参数是pair或者迭代器</span></span>
<span class="line"><span style="color:#ABB2BF;">        find()</span></span>
<span class="line"><span style="color:#ABB2BF;">        []  注意multimap不支持此操作。 时间复杂度是 O(</span><span style="color:#E5C07B;">logn</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">        lower_bound()/upper_bound()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">unordered_set, unordered_map, unordered_multiset, unordered_multimap, 哈希表</span></span>
<span class="line"><span style="color:#ABB2BF;">    和上面类似，增删改查的时间复杂度是 O(1)</span></span>
<span class="line"><span style="color:#ABB2BF;">    不支持 lower_bound()/upper_bound()， 迭代器的++，--</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">bitset, 圧位</span></span>
<span class="line"><span style="color:#ABB2BF;">    bitset&lt;10000&gt; s;</span></span>
<span class="line"><span style="color:#56B6C2;">    ~</span><span style="color:#ABB2BF;">, </span><span style="color:#56B6C2;">&amp;</span><span style="color:#ABB2BF;">, </span><span style="color:#56B6C2;">|</span><span style="color:#ABB2BF;">, </span><span style="color:#56B6C2;">^</span></span>
<span class="line"><span style="color:#C678DD;">    &gt;&gt;</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">&lt;&lt;</span></span>
<span class="line"><span style="color:#C678DD;">    ==</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">!=</span></span>
<span class="line"><span style="color:#ABB2BF;">    []</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    count()  返回有多少个1</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span></span>
<span class="line"><span style="color:#ABB2BF;">    any()  判断是否至少有一个1</span></span>
<span class="line"><span style="color:#ABB2BF;">    none()  判断是否全为0</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span></span>
<span class="line"><span style="color:#ABB2BF;">    set()  把所有位置成1</span></span>
<span class="line"><span style="color:#ABB2BF;">    set(</span><span style="color:#E5C07B;">k</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">v</span><span style="color:#ABB2BF;">)  将第k位变成v</span></span>
<span class="line"><span style="color:#ABB2BF;">    reset()  把所有位变成0</span></span>
<span class="line"><span style="color:#ABB2BF;">    flip()  等价于~</span></span>
<span class="line"><span style="color:#ABB2BF;">    flip(</span><span style="color:#E5C07B;">k</span><span style="color:#ABB2BF;">) 把第k位取反</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">————————————————————————————————————————————————————</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div>`,1)]))}const B=n(e,[["render",o]]),r=JSON.parse('{"path":"/computer/d4fhy5ro/","title":"基础算法结构模板","lang":"zh-CN","frontmatter":{"title":"基础算法结构模板","createTime":"2025/11/13 15:04:04","permalink":"/computer/d4fhy5ro/"},"readingTime":{"minutes":7.89,"words":2368},"git":{"createdTime":1764125770000,"updatedTime":1764125770000,"contributors":[{"name":"haomingze","username":"","email":"13261764+haomingze@user.noreply.gitee.com","commits":1,"avatar":"https://gravatar.com/avatar/56291d09a2d74fd2b3b35332ee79e160346be75633cdb749e82690c73eee8d6e?d=retro"}]},"filePathRelative":"notes/计算机基础/数据结构与算法/1.基础算法结构模板.md","headers":[]}');export{B as comp,r as data};
