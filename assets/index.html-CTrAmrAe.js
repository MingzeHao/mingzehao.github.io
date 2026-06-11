import{f as t,c as p,b as s,e as o,a as c,w as a,u as r,r as B,o as i,d as l}from"./app-BZiX174j.js";const y=t({jsLib:[],cssLib:[],script:"",css:"",html:`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        html,body{
            margin: 0;
            padding: 0;
        }
        .Header{
            grid-area: Header;
            border: aqua 1px solid;
        }
        .Sider{
            grid-area: Sider;
            border: aqua 1px solid;
        }
        .Mainer{
            grid-area: Mainer;
            border: aqua 1px solid;
        }
        .Footer{
            grid-area: Footer;
            border: aqua 1px solid;
        }
        .parent{
            display: grid;
            grid-template-rows: 1fr 3fr 1fr;
            grid-template-columns: 1fr 3fr;
            grid-template-areas: 
            "Header Header"
            "Sider Mainer"
            "Footer Footer";  /** 一个引号就是一行 和上面得网格对齐 */
        }

    </style>
</head>
<body>
    <div class="parent">
        <div class="Header">Header</div>
        <div class="Sider">Sider</div>
        <div class="Mainer">Mainer</div>
        <div class="Footer">Footer</div>
    </div>
</body>
</html>`}),d=t({jsLib:[],cssLib:[],script:"",css:"",html:`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>行级元素垂直居中</title>
    <style>
        body{
            text-align: center;
        }
        span {
            display: block;
        }
    </style>
</head>
<body>
    <!-- 三个行级元素 -->
    <span>1</span>
    <span>2</span>
    <span>3</span>
</body>
</html>`}),A=t({jsLib:[],cssLib:[],script:"",css:"",html:`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>块级元素中轴线居中</title>
    <style>
        body {
            text-align: center; 
        }
        .block {
            display: inline-block; 
            background-color: #3498db;
            vertical-align: middle;
            margin: 10px;
        }
    </style>
</head>
<body>
    <div class="block" style="width: 100px; height: 100px;"></div>
    <div class="block" style="width: 100px; height: 120px;"></div>
    <div class="block" style="width: 100px; height: 140px;"></div>
</body>
</html>`}),F=t({jsLib:[],cssLib:[],script:"",css:"",html:`<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>拖拽api</title>
    <style>
        .list {
            width: 100%;
            padding: 20px;
            box-sizing: border-box;
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 10px;
        }

        .item {
            width: 100%;
            height: 100px;
            background-color: aqua;
            margin: 10px 0px;
            text-align: center;
            line-height: 100px;
            border-radius: 40px;
        }

        .item.moving {
            background-color: #ccc;
            /* 拖拽时的背景颜色 */
            color: transparent;
            /* 拖拽时的文本颜色 */
        }
    </style>
</head>

<body>
    <div class="list">
        <div draggable="true" class="item">1</div> <!-- draggable="true" 变成可拖拽 -->
        <div draggable="true" class="item">2</div>
        <div draggable="true" class="item">3</div>
        <div draggable="true" class="item">4</div>
        <div draggable="true" class="item">5</div>
        <div draggable="true" class="item">6</div>
        <div draggable="true" class="item">7</div>
        <div draggable="true" class="item">8</div>
        <div draggable="true" class="item">9</div>
    </div>
    <script>
        const list = document.querySelector('.list'); // 找到list
        let source; // 拖动的元素
        list.ondragstart = e => { // 监听父元素开始拖拽
            setTimeout(() => {
                e.target.classList.add('moving'); // 拖拽元素添加moving类
            }, 0);
            source = e.target; // 拖动的元素
        };
        list.ondragenter = e => { // 元素位置发生改变，进行排序
            const target = e.target; // 现在的元素的位置
            if (!source) return; // 没有元素直接返回
            if (target === source || target === list) return; // 自己和自己不进行排序
            const sourceIndex = Array.from(source.parentNode.children).indexOf(source); // 找到拖动元素的索引
            const targetIndex = Array.from(target.parentNode.children).indexOf(target); // 找到现在元素的索引
            if (sourceIndex > targetIndex) { // 拖动的元素比现在的元素大，插入在现在元素的前面
                target.parentNode.insertBefore(source, target);
            } else { // 拖动的元素比现在的元素小，插入在现在元素的后面        
                target.parentNode.insertBefore(source, target.nextSibling);
            }
        };
        list.ondragend = e => { // 拖拽结束
            e.target.classList.remove('moving'); // 移除moving类
            source = null; // 拖动的元素为空
        };
    <\/script>
</body>

</html>`}),v={__name:"index.html",setup(m){return(b,n)=>{const e=B("VPDemoNormal");return i(),p("div",null,[n[4]||(n[4]=s("h2",{id:"引入实验",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#引入实验"},[s("span",null,"引入实验")])],-1)),n[5]||(n[5]=s("p",null,"实现列表拖拽并排序的效果(https://vuejs-core.cn/shop-vite/#/other/drag)",-1)),n[6]||(n[6]=s("p",null,[s("strong",null,"博客代码演示插件有bug,排序效果还是去沙箱看吧")],-1)),o(e,{config:r(F)},{default:a(()=>n[0]||(n[0]=[s("div",{class:"language-html line-numbers-mode has-collapsed-lines collapsed","data-highlighter":"shiki","data-ext":"html",style:{"--vp-collapsed-lines":"15","background-color":"#282c34",color:"#abb2bf"}},[s("pre",{class:"shiki one-dark-pro vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"<!"),s("span",{style:{color:"#E06C75"}},"DOCTYPE"),s("span",{style:{color:"#D19A66"}}," html"),s("span",{style:{color:"#ABB2BF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"<"),s("span",{style:{color:"#E06C75"}},"html"),s("span",{style:{color:"#D19A66"}}," lang"),s("span",{style:{color:"#ABB2BF"}},"="),s("span",{style:{color:"#98C379"}},'"en"'),s("span",{style:{color:"#ABB2BF"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"<"),s("span",{style:{color:"#E06C75"}},"head"),s("span",{style:{color:"#ABB2BF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"    <"),s("span",{style:{color:"#E06C75"}},"meta"),s("span",{style:{color:"#D19A66"}}," charset"),s("span",{style:{color:"#ABB2BF"}},"="),s("span",{style:{color:"#98C379"}},'"UTF-8"'),s("span",{style:{color:"#ABB2BF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"    <"),s("span",{style:{color:"#E06C75"}},"meta"),s("span",{style:{color:"#D19A66"}}," name"),s("span",{style:{color:"#ABB2BF"}},"="),s("span",{style:{color:"#98C379"}},'"viewport"'),s("span",{style:{color:"#D19A66"}}," content"),s("span",{style:{color:"#ABB2BF"}},"="),s("span",{style:{color:"#98C379"}},'"width=device-width, initial-scale=1.0"'),s("span",{style:{color:"#ABB2BF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"    <"),s("span",{style:{color:"#E06C75"}},"title"),s("span",{style:{color:"#ABB2BF"}},">拖拽api</"),s("span",{style:{color:"#E06C75"}},"title"),s("span",{style:{color:"#ABB2BF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"    <"),s("span",{style:{color:"#E06C75"}},"style"),s("span",{style:{color:"#ABB2BF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D19A66"}},"        .list"),s("span",{style:{color:"#ABB2BF"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"            width: "),s("span",{style:{color:"#D19A66"}},"100"),s("span",{style:{color:"#E06C75"}},"%"),s("span",{style:{color:"#ABB2BF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"            padding: "),s("span",{style:{color:"#D19A66"}},"20"),s("span",{style:{color:"#E06C75"}},"px"),s("span",{style:{color:"#ABB2BF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"            box-sizing: "),s("span",{style:{color:"#D19A66"}},"border-box"),s("span",{style:{color:"#ABB2BF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"            display: "),s("span",{style:{color:"#D19A66"}},"grid"),s("span",{style:{color:"#ABB2BF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"            grid-template-columns: "),s("span",{style:{color:"#56B6C2"}},"repeat"),s("span",{style:{color:"#ABB2BF"}},"("),s("span",{style:{color:"#D19A66"}},"4"),s("span",{style:{color:"#ABB2BF"}},", "),s("span",{style:{color:"#D19A66"}},"1"),s("span",{style:{color:"#E06C75"}},"fr"),s("span",{style:{color:"#ABB2BF"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"            gap: "),s("span",{style:{color:"#D19A66"}},"10"),s("span",{style:{color:"#E06C75"}},"px"),s("span",{style:{color:"#ABB2BF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"        }")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D19A66"}},"        .item"),s("span",{style:{color:"#ABB2BF"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"            width: "),s("span",{style:{color:"#D19A66"}},"100"),s("span",{style:{color:"#E06C75"}},"%"),s("span",{style:{color:"#ABB2BF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"            height: "),s("span",{style:{color:"#D19A66"}},"100"),s("span",{style:{color:"#E06C75"}},"px"),s("span",{style:{color:"#ABB2BF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"            background-color: "),s("span",{style:{color:"#D19A66"}},"aqua"),s("span",{style:{color:"#ABB2BF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"            margin: "),s("span",{style:{color:"#D19A66"}},"10"),s("span",{style:{color:"#E06C75"}},"px"),s("span",{style:{color:"#D19A66"}}," 0"),s("span",{style:{color:"#E06C75"}},"px"),s("span",{style:{color:"#ABB2BF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"            text-align: "),s("span",{style:{color:"#D19A66"}},"center"),s("span",{style:{color:"#ABB2BF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"            line-height: "),s("span",{style:{color:"#D19A66"}},"100"),s("span",{style:{color:"#E06C75"}},"px"),s("span",{style:{color:"#ABB2BF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"            border-radius: "),s("span",{style:{color:"#D19A66"}},"40"),s("span",{style:{color:"#E06C75"}},"px"),s("span",{style:{color:"#ABB2BF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"        }")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D19A66"}},"        .item.moving"),s("span",{style:{color:"#ABB2BF"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"            background-color: "),s("span",{style:{color:"#D19A66"}},"#ccc"),s("span",{style:{color:"#ABB2BF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#7F848E","font-style":"italic"}},"            /* 拖拽时的背景颜色 */")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"            color: "),s("span",{style:{color:"#D19A66"}},"transparent"),s("span",{style:{color:"#ABB2BF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#7F848E","font-style":"italic"}},"            /* 拖拽时的文本颜色 */")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"    </"),s("span",{style:{color:"#E06C75"}},"style"),s("span",{style:{color:"#ABB2BF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"</"),s("span",{style:{color:"#E06C75"}},"head"),s("span",{style:{color:"#ABB2BF"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"<"),s("span",{style:{color:"#E06C75"}},"body"),s("span",{style:{color:"#ABB2BF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"    <"),s("span",{style:{color:"#E06C75"}},"div"),s("span",{style:{color:"#D19A66"}}," class"),s("span",{style:{color:"#ABB2BF"}},"="),s("span",{style:{color:"#98C379"}},'"list"'),s("span",{style:{color:"#ABB2BF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"        <"),s("span",{style:{color:"#E06C75"}},"div"),s("span",{style:{color:"#D19A66"}}," draggable"),s("span",{style:{color:"#ABB2BF"}},"="),s("span",{style:{color:"#98C379"}},'"true"'),s("span",{style:{color:"#D19A66"}}," class"),s("span",{style:{color:"#ABB2BF"}},"="),s("span",{style:{color:"#98C379"}},'"item"'),s("span",{style:{color:"#ABB2BF"}},">1</"),s("span",{style:{color:"#E06C75"}},"div"),s("span",{style:{color:"#ABB2BF"}},"> "),s("span",{style:{color:"#7F848E","font-style":"italic"}},'<!-- draggable="true" 变成可拖拽 -->')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"        <"),s("span",{style:{color:"#E06C75"}},"div"),s("span",{style:{color:"#D19A66"}}," draggable"),s("span",{style:{color:"#ABB2BF"}},"="),s("span",{style:{color:"#98C379"}},'"true"'),s("span",{style:{color:"#D19A66"}}," class"),s("span",{style:{color:"#ABB2BF"}},"="),s("span",{style:{color:"#98C379"}},'"item"'),s("span",{style:{color:"#ABB2BF"}},">2</"),s("span",{style:{color:"#E06C75"}},"div"),s("span",{style:{color:"#ABB2BF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"        <"),s("span",{style:{color:"#E06C75"}},"div"),s("span",{style:{color:"#D19A66"}}," draggable"),s("span",{style:{color:"#ABB2BF"}},"="),s("span",{style:{color:"#98C379"}},'"true"'),s("span",{style:{color:"#D19A66"}}," class"),s("span",{style:{color:"#ABB2BF"}},"="),s("span",{style:{color:"#98C379"}},'"item"'),s("span",{style:{color:"#ABB2BF"}},">3</"),s("span",{style:{color:"#E06C75"}},"div"),s("span",{style:{color:"#ABB2BF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"        <"),s("span",{style:{color:"#E06C75"}},"div"),s("span",{style:{color:"#D19A66"}}," draggable"),s("span",{style:{color:"#ABB2BF"}},"="),s("span",{style:{color:"#98C379"}},'"true"'),s("span",{style:{color:"#D19A66"}}," class"),s("span",{style:{color:"#ABB2BF"}},"="),s("span",{style:{color:"#98C379"}},'"item"'),s("span",{style:{color:"#ABB2BF"}},">4</"),s("span",{style:{color:"#E06C75"}},"div"),s("span",{style:{color:"#ABB2BF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"        <"),s("span",{style:{color:"#E06C75"}},"div"),s("span",{style:{color:"#D19A66"}}," draggable"),s("span",{style:{color:"#ABB2BF"}},"="),s("span",{style:{color:"#98C379"}},'"true"'),s("span",{style:{color:"#D19A66"}}," class"),s("span",{style:{color:"#ABB2BF"}},"="),s("span",{style:{color:"#98C379"}},'"item"'),s("span",{style:{color:"#ABB2BF"}},">5</"),s("span",{style:{color:"#E06C75"}},"div"),s("span",{style:{color:"#ABB2BF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"        <"),s("span",{style:{color:"#E06C75"}},"div"),s("span",{style:{color:"#D19A66"}}," draggable"),s("span",{style:{color:"#ABB2BF"}},"="),s("span",{style:{color:"#98C379"}},'"true"'),s("span",{style:{color:"#D19A66"}}," class"),s("span",{style:{color:"#ABB2BF"}},"="),s("span",{style:{color:"#98C379"}},'"item"'),s("span",{style:{color:"#ABB2BF"}},">6</"),s("span",{style:{color:"#E06C75"}},"div"),s("span",{style:{color:"#ABB2BF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"        <"),s("span",{style:{color:"#E06C75"}},"div"),s("span",{style:{color:"#D19A66"}}," draggable"),s("span",{style:{color:"#ABB2BF"}},"="),s("span",{style:{color:"#98C379"}},'"true"'),s("span",{style:{color:"#D19A66"}}," class"),s("span",{style:{color:"#ABB2BF"}},"="),s("span",{style:{color:"#98C379"}},'"item"'),s("span",{style:{color:"#ABB2BF"}},">7</"),s("span",{style:{color:"#E06C75"}},"div"),s("span",{style:{color:"#ABB2BF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"        <"),s("span",{style:{color:"#E06C75"}},"div"),s("span",{style:{color:"#D19A66"}}," draggable"),s("span",{style:{color:"#ABB2BF"}},"="),s("span",{style:{color:"#98C379"}},'"true"'),s("span",{style:{color:"#D19A66"}}," class"),s("span",{style:{color:"#ABB2BF"}},"="),s("span",{style:{color:"#98C379"}},'"item"'),s("span",{style:{color:"#ABB2BF"}},">8</"),s("span",{style:{color:"#E06C75"}},"div"),s("span",{style:{color:"#ABB2BF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"        <"),s("span",{style:{color:"#E06C75"}},"div"),s("span",{style:{color:"#D19A66"}}," draggable"),s("span",{style:{color:"#ABB2BF"}},"="),s("span",{style:{color:"#98C379"}},'"true"'),s("span",{style:{color:"#D19A66"}}," class"),s("span",{style:{color:"#ABB2BF"}},"="),s("span",{style:{color:"#98C379"}},'"item"'),s("span",{style:{color:"#ABB2BF"}},">9</"),s("span",{style:{color:"#E06C75"}},"div"),s("span",{style:{color:"#ABB2BF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"    </"),s("span",{style:{color:"#E06C75"}},"div"),s("span",{style:{color:"#ABB2BF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"    <"),s("span",{style:{color:"#E06C75"}},"script"),s("span",{style:{color:"#ABB2BF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C678DD"}},"        const"),s("span",{style:{color:"#E5C07B"}}," list"),s("span",{style:{color:"#56B6C2"}}," ="),s("span",{style:{color:"#E5C07B"}}," document"),s("span",{style:{color:"#ABB2BF"}},"."),s("span",{style:{color:"#61AFEF"}},"querySelector"),s("span",{style:{color:"#ABB2BF"}},"("),s("span",{style:{color:"#98C379"}},"'.list'"),s("span",{style:{color:"#ABB2BF"}},"); "),s("span",{style:{color:"#7F848E","font-style":"italic"}},"// 找到list")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C678DD"}},"        let"),s("span",{style:{color:"#E06C75"}}," source"),s("span",{style:{color:"#ABB2BF"}},"; "),s("span",{style:{color:"#7F848E","font-style":"italic"}},"// 拖动的元素")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E5C07B"}},"        list"),s("span",{style:{color:"#ABB2BF"}},"."),s("span",{style:{color:"#61AFEF"}},"ondragstart"),s("span",{style:{color:"#56B6C2"}}," ="),s("span",{style:{color:"#E06C75","font-style":"italic"}}," e"),s("span",{style:{color:"#C678DD"}}," =>"),s("span",{style:{color:"#ABB2BF"}}," { "),s("span",{style:{color:"#7F848E","font-style":"italic"}},"// 监听父元素开始拖拽")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#61AFEF"}},"            setTimeout"),s("span",{style:{color:"#ABB2BF"}},"(() "),s("span",{style:{color:"#C678DD"}},"=>"),s("span",{style:{color:"#ABB2BF"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E5C07B"}},"                e"),s("span",{style:{color:"#ABB2BF"}},"."),s("span",{style:{color:"#E5C07B"}},"target"),s("span",{style:{color:"#ABB2BF"}},"."),s("span",{style:{color:"#E5C07B"}},"classList"),s("span",{style:{color:"#ABB2BF"}},"."),s("span",{style:{color:"#61AFEF"}},"add"),s("span",{style:{color:"#ABB2BF"}},"("),s("span",{style:{color:"#98C379"}},"'moving'"),s("span",{style:{color:"#ABB2BF"}},"); "),s("span",{style:{color:"#7F848E","font-style":"italic"}},"// 拖拽元素添加moving类")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"            }, "),s("span",{style:{color:"#D19A66"}},"0"),s("span",{style:{color:"#ABB2BF"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E06C75"}},"            source"),s("span",{style:{color:"#56B6C2"}}," ="),s("span",{style:{color:"#E5C07B"}}," e"),s("span",{style:{color:"#ABB2BF"}},"."),s("span",{style:{color:"#E06C75"}},"target"),s("span",{style:{color:"#ABB2BF"}},"; "),s("span",{style:{color:"#7F848E","font-style":"italic"}},"// 拖动的元素")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"        };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E5C07B"}},"        list"),s("span",{style:{color:"#ABB2BF"}},"."),s("span",{style:{color:"#61AFEF"}},"ondragenter"),s("span",{style:{color:"#56B6C2"}}," ="),s("span",{style:{color:"#E06C75","font-style":"italic"}}," e"),s("span",{style:{color:"#C678DD"}}," =>"),s("span",{style:{color:"#ABB2BF"}}," { "),s("span",{style:{color:"#7F848E","font-style":"italic"}},"// 元素位置发生改变，进行排序")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C678DD"}},"            const"),s("span",{style:{color:"#E5C07B"}}," target"),s("span",{style:{color:"#56B6C2"}}," ="),s("span",{style:{color:"#E5C07B"}}," e"),s("span",{style:{color:"#ABB2BF"}},"."),s("span",{style:{color:"#E06C75"}},"target"),s("span",{style:{color:"#ABB2BF"}},"; "),s("span",{style:{color:"#7F848E","font-style":"italic"}},"// 现在的元素的位置")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C678DD"}},"            if"),s("span",{style:{color:"#ABB2BF"}}," ("),s("span",{style:{color:"#56B6C2"}},"!"),s("span",{style:{color:"#E06C75"}},"source"),s("span",{style:{color:"#ABB2BF"}},") "),s("span",{style:{color:"#C678DD"}},"return"),s("span",{style:{color:"#ABB2BF"}},"; "),s("span",{style:{color:"#7F848E","font-style":"italic"}},"// 没有元素直接返回")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C678DD"}},"            if"),s("span",{style:{color:"#ABB2BF"}}," ("),s("span",{style:{color:"#E06C75"}},"target"),s("span",{style:{color:"#56B6C2"}}," ==="),s("span",{style:{color:"#E06C75"}}," source"),s("span",{style:{color:"#56B6C2"}}," ||"),s("span",{style:{color:"#E06C75"}}," target"),s("span",{style:{color:"#56B6C2"}}," ==="),s("span",{style:{color:"#E06C75"}}," list"),s("span",{style:{color:"#ABB2BF"}},") "),s("span",{style:{color:"#C678DD"}},"return"),s("span",{style:{color:"#ABB2BF"}},"; "),s("span",{style:{color:"#7F848E","font-style":"italic"}},"// 自己和自己不进行排序")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C678DD"}},"            const"),s("span",{style:{color:"#E5C07B"}}," sourceIndex"),s("span",{style:{color:"#56B6C2"}}," ="),s("span",{style:{color:"#E5C07B"}}," Array"),s("span",{style:{color:"#ABB2BF"}},"."),s("span",{style:{color:"#61AFEF"}},"from"),s("span",{style:{color:"#ABB2BF"}},"("),s("span",{style:{color:"#E5C07B"}},"source"),s("span",{style:{color:"#ABB2BF"}},"."),s("span",{style:{color:"#E5C07B"}},"parentNode"),s("span",{style:{color:"#ABB2BF"}},"."),s("span",{style:{color:"#E06C75"}},"children"),s("span",{style:{color:"#ABB2BF"}},")."),s("span",{style:{color:"#61AFEF"}},"indexOf"),s("span",{style:{color:"#ABB2BF"}},"("),s("span",{style:{color:"#E06C75"}},"source"),s("span",{style:{color:"#ABB2BF"}},"); "),s("span",{style:{color:"#7F848E","font-style":"italic"}},"// 找到拖动元素的索引")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C678DD"}},"            const"),s("span",{style:{color:"#E5C07B"}}," targetIndex"),s("span",{style:{color:"#56B6C2"}}," ="),s("span",{style:{color:"#E5C07B"}}," Array"),s("span",{style:{color:"#ABB2BF"}},"."),s("span",{style:{color:"#61AFEF"}},"from"),s("span",{style:{color:"#ABB2BF"}},"("),s("span",{style:{color:"#E5C07B"}},"target"),s("span",{style:{color:"#ABB2BF"}},"."),s("span",{style:{color:"#E5C07B"}},"parentNode"),s("span",{style:{color:"#ABB2BF"}},"."),s("span",{style:{color:"#E06C75"}},"children"),s("span",{style:{color:"#ABB2BF"}},")."),s("span",{style:{color:"#61AFEF"}},"indexOf"),s("span",{style:{color:"#ABB2BF"}},"("),s("span",{style:{color:"#E06C75"}},"target"),s("span",{style:{color:"#ABB2BF"}},"); "),s("span",{style:{color:"#7F848E","font-style":"italic"}},"// 找到现在元素的索引")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C678DD"}},"            if"),s("span",{style:{color:"#ABB2BF"}}," ("),s("span",{style:{color:"#E06C75"}},"sourceIndex"),s("span",{style:{color:"#56B6C2"}}," >"),s("span",{style:{color:"#E06C75"}}," targetIndex"),s("span",{style:{color:"#ABB2BF"}},") { "),s("span",{style:{color:"#7F848E","font-style":"italic"}},"// 拖动的元素比现在的元素大，插入在现在元素的前面")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E5C07B"}},"                target"),s("span",{style:{color:"#ABB2BF"}},"."),s("span",{style:{color:"#E5C07B"}},"parentNode"),s("span",{style:{color:"#ABB2BF"}},"."),s("span",{style:{color:"#61AFEF"}},"insertBefore"),s("span",{style:{color:"#ABB2BF"}},"("),s("span",{style:{color:"#E06C75"}},"source"),s("span",{style:{color:"#ABB2BF"}},", "),s("span",{style:{color:"#E06C75"}},"target"),s("span",{style:{color:"#ABB2BF"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"            } "),s("span",{style:{color:"#C678DD"}},"else"),s("span",{style:{color:"#ABB2BF"}}," { "),s("span",{style:{color:"#7F848E","font-style":"italic"}},"// 拖动的元素比现在的元素小，插入在现在元素的后面        ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E5C07B"}},"                target"),s("span",{style:{color:"#ABB2BF"}},"."),s("span",{style:{color:"#E5C07B"}},"parentNode"),s("span",{style:{color:"#ABB2BF"}},"."),s("span",{style:{color:"#61AFEF"}},"insertBefore"),s("span",{style:{color:"#ABB2BF"}},"("),s("span",{style:{color:"#E06C75"}},"source"),s("span",{style:{color:"#ABB2BF"}},", "),s("span",{style:{color:"#E5C07B"}},"target"),s("span",{style:{color:"#ABB2BF"}},"."),s("span",{style:{color:"#E06C75"}},"nextSibling"),s("span",{style:{color:"#ABB2BF"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"            }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"        };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E5C07B"}},"        list"),s("span",{style:{color:"#ABB2BF"}},"."),s("span",{style:{color:"#61AFEF"}},"ondragend"),s("span",{style:{color:"#56B6C2"}}," ="),s("span",{style:{color:"#E06C75","font-style":"italic"}}," e"),s("span",{style:{color:"#C678DD"}}," =>"),s("span",{style:{color:"#ABB2BF"}}," { "),s("span",{style:{color:"#7F848E","font-style":"italic"}},"// 拖拽结束")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E5C07B"}},"            e"),s("span",{style:{color:"#ABB2BF"}},"."),s("span",{style:{color:"#E5C07B"}},"target"),s("span",{style:{color:"#ABB2BF"}},"."),s("span",{style:{color:"#E5C07B"}},"classList"),s("span",{style:{color:"#ABB2BF"}},"."),s("span",{style:{color:"#61AFEF"}},"remove"),s("span",{style:{color:"#ABB2BF"}},"("),s("span",{style:{color:"#98C379"}},"'moving'"),s("span",{style:{color:"#ABB2BF"}},"); "),s("span",{style:{color:"#7F848E","font-style":"italic"}},"// 移除moving类")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E06C75"}},"            source"),s("span",{style:{color:"#56B6C2"}}," ="),s("span",{style:{color:"#D19A66"}}," null"),s("span",{style:{color:"#ABB2BF"}},"; "),s("span",{style:{color:"#7F848E","font-style":"italic"}},"// 拖动的元素为空")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"        };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"    </"),s("span",{style:{color:"#E06C75"}},"script"),s("span",{style:{color:"#ABB2BF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"</"),s("span",{style:{color:"#E06C75"}},"body"),s("span",{style:{color:"#ABB2BF"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"</"),s("span",{style:{color:"#E06C75"}},"html"),s("span",{style:{color:"#ABB2BF"}},">")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})]),s("div",{class:"collapsed-lines"})],-1)])),_:1},8,["config"]),n[7]||(n[7]=c('<h2 id="补充" tabindex="-1"><a class="header-anchor" href="#补充"><span>补充</span></a></h2><h3 id="行内元素" tabindex="-1"><a class="header-anchor" href="#行内元素"><span>行内元素</span></a></h3><ul><li>宽度，高度由内容决定，无法指定宽高</li><li>margin左右且设置为数值有效，上下无效，padding上下左右有效即在contentbox下会撑大</li><li>当视窗大小过小时内容会换行</li></ul><h3 id="块元素" tabindex="-1"><a class="header-anchor" href="#块元素"><span>块元素</span></a></h3><ul><li>宽度默认占一行，高度由内容决定，可以指定宽和高</li><li>margin和padding的上下左右均对其有效</li><li>当视窗大小过小时内容会换行</li></ul><h3 id="行内块元素" tabindex="-1"><a class="header-anchor" href="#行内块元素"><span>行内块元素</span></a></h3><p>其实就是块元素不默认占一行了，用多少占多少，且带了一个5px默认左右外边距</p><h3 id="标签之间相互转换" tabindex="-1"><a class="header-anchor" href="#标签之间相互转换"><span>标签之间相互转换</span></a></h3><p>就是使用display属性进行块元素，行内元素进行互相转化。</p><blockquote><p>这里的display理解成画图软件时拉出来的框。</p></blockquote><h2 id="补充实验" tabindex="-1"><a class="header-anchor" href="#补充实验"><span>补充实验</span></a></h2><h3 id="三个块元素沿中轴线对齐" tabindex="-1"><a class="header-anchor" href="#三个块元素沿中轴线对齐"><span>三个块元素沿中轴线对齐</span></a></h3>',12)),o(e,{config:r(A)},{default:a(()=>n[1]||(n[1]=[s("div",{class:"language-html line-numbers-mode has-collapsed-lines collapsed","data-highlighter":"shiki","data-ext":"html",style:{"--vp-collapsed-lines":"15","background-color":"#282c34",color:"#abb2bf"}},[s("pre",{class:"shiki one-dark-pro vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"<!"),s("span",{style:{color:"#E06C75"}},"DOCTYPE"),s("span",{style:{color:"#D19A66"}}," html"),s("span",{style:{color:"#ABB2BF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"<"),s("span",{style:{color:"#E06C75"}},"html"),s("span",{style:{color:"#D19A66"}}," lang"),s("span",{style:{color:"#ABB2BF"}},"="),s("span",{style:{color:"#98C379"}},'"en"'),s("span",{style:{color:"#ABB2BF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"<"),s("span",{style:{color:"#E06C75"}},"head"),s("span",{style:{color:"#ABB2BF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"    <"),s("span",{style:{color:"#E06C75"}},"meta"),s("span",{style:{color:"#D19A66"}}," charset"),s("span",{style:{color:"#ABB2BF"}},"="),s("span",{style:{color:"#98C379"}},'"UTF-8"'),s("span",{style:{color:"#ABB2BF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"    <"),s("span",{style:{color:"#E06C75"}},"meta"),s("span",{style:{color:"#D19A66"}}," name"),s("span",{style:{color:"#ABB2BF"}},"="),s("span",{style:{color:"#98C379"}},'"viewport"'),s("span",{style:{color:"#D19A66"}}," content"),s("span",{style:{color:"#ABB2BF"}},"="),s("span",{style:{color:"#98C379"}},'"width=device-width, initial-scale=1.0"'),s("span",{style:{color:"#ABB2BF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"    <"),s("span",{style:{color:"#E06C75"}},"title"),s("span",{style:{color:"#ABB2BF"}},">块级元素中轴线居中</"),s("span",{style:{color:"#E06C75"}},"title"),s("span",{style:{color:"#ABB2BF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"    <"),s("span",{style:{color:"#E06C75"}},"style"),s("span",{style:{color:"#ABB2BF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E06C75"}},"        body"),s("span",{style:{color:"#ABB2BF"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"            text-align: "),s("span",{style:{color:"#D19A66"}},"center"),s("span",{style:{color:"#ABB2BF"}},"; ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D19A66"}},"        .block"),s("span",{style:{color:"#ABB2BF"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"            display: "),s("span",{style:{color:"#D19A66"}},"inline-block"),s("span",{style:{color:"#ABB2BF"}},"; ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"            background-color: "),s("span",{style:{color:"#D19A66"}},"#3498db"),s("span",{style:{color:"#ABB2BF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"            vertical-align: "),s("span",{style:{color:"#D19A66"}},"middle"),s("span",{style:{color:"#ABB2BF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"            margin: "),s("span",{style:{color:"#D19A66"}},"10"),s("span",{style:{color:"#E06C75"}},"px"),s("span",{style:{color:"#ABB2BF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"    </"),s("span",{style:{color:"#E06C75"}},"style"),s("span",{style:{color:"#ABB2BF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"</"),s("span",{style:{color:"#E06C75"}},"head"),s("span",{style:{color:"#ABB2BF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"<"),s("span",{style:{color:"#E06C75"}},"body"),s("span",{style:{color:"#ABB2BF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"    <"),s("span",{style:{color:"#E06C75"}},"div"),s("span",{style:{color:"#D19A66"}}," class"),s("span",{style:{color:"#ABB2BF"}},"="),s("span",{style:{color:"#98C379"}},'"block"'),s("span",{style:{color:"#D19A66"}}," style"),s("span",{style:{color:"#ABB2BF"}},"="),s("span",{style:{color:"#98C379"}},'"width: 100px; height: 100px;"'),s("span",{style:{color:"#ABB2BF"}},"></"),s("span",{style:{color:"#E06C75"}},"div"),s("span",{style:{color:"#ABB2BF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"    <"),s("span",{style:{color:"#E06C75"}},"div"),s("span",{style:{color:"#D19A66"}}," class"),s("span",{style:{color:"#ABB2BF"}},"="),s("span",{style:{color:"#98C379"}},'"block"'),s("span",{style:{color:"#D19A66"}}," style"),s("span",{style:{color:"#ABB2BF"}},"="),s("span",{style:{color:"#98C379"}},'"width: 100px; height: 120px;"'),s("span",{style:{color:"#ABB2BF"}},"></"),s("span",{style:{color:"#E06C75"}},"div"),s("span",{style:{color:"#ABB2BF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"    <"),s("span",{style:{color:"#E06C75"}},"div"),s("span",{style:{color:"#D19A66"}}," class"),s("span",{style:{color:"#ABB2BF"}},"="),s("span",{style:{color:"#98C379"}},'"block"'),s("span",{style:{color:"#D19A66"}}," style"),s("span",{style:{color:"#ABB2BF"}},"="),s("span",{style:{color:"#98C379"}},'"width: 100px; height: 140px;"'),s("span",{style:{color:"#ABB2BF"}},"></"),s("span",{style:{color:"#E06C75"}},"div"),s("span",{style:{color:"#ABB2BF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"</"),s("span",{style:{color:"#E06C75"}},"body"),s("span",{style:{color:"#ABB2BF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"</"),s("span",{style:{color:"#E06C75"}},"html"),s("span",{style:{color:"#ABB2BF"}},">")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})]),s("div",{class:"collapsed-lines"})],-1)])),_:1},8,["config"]),n[8]||(n[8]=s("h3",{id:"三个行级元素垂直对齐",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#三个行级元素垂直对齐"},[s("span",null,"三个行级元素垂直对齐")])],-1)),o(e,{config:r(d)},{default:a(()=>n[2]||(n[2]=[s("div",{class:"language-html line-numbers-mode has-collapsed-lines collapsed","data-highlighter":"shiki","data-ext":"html",style:{"--vp-collapsed-lines":"15","background-color":"#282c34",color:"#abb2bf"}},[s("pre",{class:"shiki one-dark-pro vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"<!"),s("span",{style:{color:"#E06C75"}},"DOCTYPE"),s("span",{style:{color:"#D19A66"}}," html"),s("span",{style:{color:"#ABB2BF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"<"),s("span",{style:{color:"#E06C75"}},"html"),s("span",{style:{color:"#D19A66"}}," lang"),s("span",{style:{color:"#ABB2BF"}},"="),s("span",{style:{color:"#98C379"}},'"en"'),s("span",{style:{color:"#ABB2BF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"<"),s("span",{style:{color:"#E06C75"}},"head"),s("span",{style:{color:"#ABB2BF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"    <"),s("span",{style:{color:"#E06C75"}},"meta"),s("span",{style:{color:"#D19A66"}}," charset"),s("span",{style:{color:"#ABB2BF"}},"="),s("span",{style:{color:"#98C379"}},'"UTF-8"'),s("span",{style:{color:"#ABB2BF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"    <"),s("span",{style:{color:"#E06C75"}},"meta"),s("span",{style:{color:"#D19A66"}}," name"),s("span",{style:{color:"#ABB2BF"}},"="),s("span",{style:{color:"#98C379"}},'"viewport"'),s("span",{style:{color:"#D19A66"}}," content"),s("span",{style:{color:"#ABB2BF"}},"="),s("span",{style:{color:"#98C379"}},'"width=device-width, initial-scale=1.0"'),s("span",{style:{color:"#ABB2BF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"    <"),s("span",{style:{color:"#E06C75"}},"title"),s("span",{style:{color:"#ABB2BF"}},">行级元素垂直居中</"),s("span",{style:{color:"#E06C75"}},"title"),s("span",{style:{color:"#ABB2BF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"    <"),s("span",{style:{color:"#E06C75"}},"style"),s("span",{style:{color:"#ABB2BF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E06C75"}},"        body"),s("span",{style:{color:"#ABB2BF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"            text-align: "),s("span",{style:{color:"#D19A66"}},"center"),s("span",{style:{color:"#ABB2BF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E06C75"}},"        span"),s("span",{style:{color:"#ABB2BF"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"            display: "),s("span",{style:{color:"#D19A66"}},"block"),s("span",{style:{color:"#ABB2BF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"    </"),s("span",{style:{color:"#E06C75"}},"style"),s("span",{style:{color:"#ABB2BF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"</"),s("span",{style:{color:"#E06C75"}},"head"),s("span",{style:{color:"#ABB2BF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"<"),s("span",{style:{color:"#E06C75"}},"body"),s("span",{style:{color:"#ABB2BF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#7F848E","font-style":"italic"}},"    <!-- 三个行级元素 -->")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"    <"),s("span",{style:{color:"#E06C75"}},"span"),s("span",{style:{color:"#ABB2BF"}},">1</"),s("span",{style:{color:"#E06C75"}},"span"),s("span",{style:{color:"#ABB2BF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"    <"),s("span",{style:{color:"#E06C75"}},"span"),s("span",{style:{color:"#ABB2BF"}},">2</"),s("span",{style:{color:"#E06C75"}},"span"),s("span",{style:{color:"#ABB2BF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"    <"),s("span",{style:{color:"#E06C75"}},"span"),s("span",{style:{color:"#ABB2BF"}},">3</"),s("span",{style:{color:"#E06C75"}},"span"),s("span",{style:{color:"#ABB2BF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"</"),s("span",{style:{color:"#E06C75"}},"body"),s("span",{style:{color:"#ABB2BF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"</"),s("span",{style:{color:"#E06C75"}},"html"),s("span",{style:{color:"#ABB2BF"}},">")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})]),s("div",{class:"collapsed-lines"})],-1)])),_:1},8,["config"]),n[9]||(n[9]=c('<h2 id="流式布局" tabindex="-1"><a class="header-anchor" href="#流式布局"><span>流式布局</span></a></h2><p>默认布局方式，对于块级元素，同级的块元素会垂直排布，而内联元素会横向排布。块级元素默认宽度占满父元素。</p><blockquote><p>参考：https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_display/Block_and_inline_layout_in_normal_flow</p></blockquote><h2 id="网格布局" tabindex="-1"><a class="header-anchor" href="#网格布局"><span>网格布局</span></a></h2><p>一个二维布局，对页面进行大体上的分块。</p><blockquote><p>多种写法：https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout</p></blockquote><p>我觉得还不错的写法</p>',7)),o(e,{config:r(y)},{default:a(()=>n[3]||(n[3]=[s("div",{class:"language-html line-numbers-mode has-collapsed-lines collapsed","data-highlighter":"shiki","data-ext":"html",style:{"--vp-collapsed-lines":"15","background-color":"#282c34",color:"#abb2bf"}},[s("pre",{class:"shiki one-dark-pro vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"<!"),s("span",{style:{color:"#E06C75"}},"DOCTYPE"),s("span",{style:{color:"#D19A66"}}," html"),s("span",{style:{color:"#ABB2BF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"<"),s("span",{style:{color:"#E06C75"}},"html"),s("span",{style:{color:"#D19A66"}}," lang"),s("span",{style:{color:"#ABB2BF"}},"="),s("span",{style:{color:"#98C379"}},'"en"'),s("span",{style:{color:"#ABB2BF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"<"),s("span",{style:{color:"#E06C75"}},"head"),s("span",{style:{color:"#ABB2BF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"    <"),s("span",{style:{color:"#E06C75"}},"meta"),s("span",{style:{color:"#D19A66"}}," charset"),s("span",{style:{color:"#ABB2BF"}},"="),s("span",{style:{color:"#98C379"}},'"UTF-8"'),s("span",{style:{color:"#ABB2BF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"    <"),s("span",{style:{color:"#E06C75"}},"meta"),s("span",{style:{color:"#D19A66"}}," name"),s("span",{style:{color:"#ABB2BF"}},"="),s("span",{style:{color:"#98C379"}},'"viewport"'),s("span",{style:{color:"#D19A66"}}," content"),s("span",{style:{color:"#ABB2BF"}},"="),s("span",{style:{color:"#98C379"}},'"width=device-width, initial-scale=1.0"'),s("span",{style:{color:"#ABB2BF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"    <"),s("span",{style:{color:"#E06C75"}},"title"),s("span",{style:{color:"#ABB2BF"}},">Document</"),s("span",{style:{color:"#E06C75"}},"title"),s("span",{style:{color:"#ABB2BF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"    <"),s("span",{style:{color:"#E06C75"}},"style"),s("span",{style:{color:"#ABB2BF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E06C75"}},"        html"),s("span",{style:{color:"#ABB2BF"}},","),s("span",{style:{color:"#E06C75"}},"body"),s("span",{style:{color:"#ABB2BF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"            margin: "),s("span",{style:{color:"#D19A66"}},"0"),s("span",{style:{color:"#ABB2BF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"            padding: "),s("span",{style:{color:"#D19A66"}},"0"),s("span",{style:{color:"#ABB2BF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D19A66"}},"        .Header"),s("span",{style:{color:"#ABB2BF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"            grid-area: Header;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"            border: "),s("span",{style:{color:"#D19A66"}},"aqua"),s("span",{style:{color:"#D19A66"}}," 1"),s("span",{style:{color:"#E06C75"}},"px"),s("span",{style:{color:"#D19A66"}}," solid"),s("span",{style:{color:"#ABB2BF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D19A66"}},"        .Sider"),s("span",{style:{color:"#ABB2BF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"            grid-area: Sider;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"            border: "),s("span",{style:{color:"#D19A66"}},"aqua"),s("span",{style:{color:"#D19A66"}}," 1"),s("span",{style:{color:"#E06C75"}},"px"),s("span",{style:{color:"#D19A66"}}," solid"),s("span",{style:{color:"#ABB2BF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D19A66"}},"        .Mainer"),s("span",{style:{color:"#ABB2BF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"            grid-area: Mainer;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"            border: "),s("span",{style:{color:"#D19A66"}},"aqua"),s("span",{style:{color:"#D19A66"}}," 1"),s("span",{style:{color:"#E06C75"}},"px"),s("span",{style:{color:"#D19A66"}}," solid"),s("span",{style:{color:"#ABB2BF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D19A66"}},"        .Footer"),s("span",{style:{color:"#ABB2BF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"            grid-area: Footer;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"            border: "),s("span",{style:{color:"#D19A66"}},"aqua"),s("span",{style:{color:"#D19A66"}}," 1"),s("span",{style:{color:"#E06C75"}},"px"),s("span",{style:{color:"#D19A66"}}," solid"),s("span",{style:{color:"#ABB2BF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D19A66"}},"        .parent"),s("span",{style:{color:"#ABB2BF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"            display: "),s("span",{style:{color:"#D19A66"}},"grid"),s("span",{style:{color:"#ABB2BF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"            grid-template-rows: "),s("span",{style:{color:"#D19A66"}},"1"),s("span",{style:{color:"#E06C75"}},"fr"),s("span",{style:{color:"#D19A66"}}," 3"),s("span",{style:{color:"#E06C75"}},"fr"),s("span",{style:{color:"#D19A66"}}," 1"),s("span",{style:{color:"#E06C75"}},"fr"),s("span",{style:{color:"#ABB2BF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"            grid-template-columns: "),s("span",{style:{color:"#D19A66"}},"1"),s("span",{style:{color:"#E06C75"}},"fr"),s("span",{style:{color:"#D19A66"}}," 3"),s("span",{style:{color:"#E06C75"}},"fr"),s("span",{style:{color:"#ABB2BF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"            grid-template-areas: ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#98C379"}},'            "Header Header"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#98C379"}},'            "Sider Mainer"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#98C379"}},'            "Footer Footer"'),s("span",{style:{color:"#ABB2BF"}},";  "),s("span",{style:{color:"#7F848E","font-style":"italic"}},"/** 一个引号就是一行 和上面得网格对齐 */")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"        }")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"    </"),s("span",{style:{color:"#E06C75"}},"style"),s("span",{style:{color:"#ABB2BF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"</"),s("span",{style:{color:"#E06C75"}},"head"),s("span",{style:{color:"#ABB2BF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"<"),s("span",{style:{color:"#E06C75"}},"body"),s("span",{style:{color:"#ABB2BF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"    <"),s("span",{style:{color:"#E06C75"}},"div"),s("span",{style:{color:"#D19A66"}}," class"),s("span",{style:{color:"#ABB2BF"}},"="),s("span",{style:{color:"#98C379"}},'"parent"'),s("span",{style:{color:"#ABB2BF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"        <"),s("span",{style:{color:"#E06C75"}},"div"),s("span",{style:{color:"#D19A66"}}," class"),s("span",{style:{color:"#ABB2BF"}},"="),s("span",{style:{color:"#98C379"}},'"Header"'),s("span",{style:{color:"#ABB2BF"}},">Header</"),s("span",{style:{color:"#E06C75"}},"div"),s("span",{style:{color:"#ABB2BF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"        <"),s("span",{style:{color:"#E06C75"}},"div"),s("span",{style:{color:"#D19A66"}}," class"),s("span",{style:{color:"#ABB2BF"}},"="),s("span",{style:{color:"#98C379"}},'"Sider"'),s("span",{style:{color:"#ABB2BF"}},">Sider</"),s("span",{style:{color:"#E06C75"}},"div"),s("span",{style:{color:"#ABB2BF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"        <"),s("span",{style:{color:"#E06C75"}},"div"),s("span",{style:{color:"#D19A66"}}," class"),s("span",{style:{color:"#ABB2BF"}},"="),s("span",{style:{color:"#98C379"}},'"Mainer"'),s("span",{style:{color:"#ABB2BF"}},">Mainer</"),s("span",{style:{color:"#E06C75"}},"div"),s("span",{style:{color:"#ABB2BF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"        <"),s("span",{style:{color:"#E06C75"}},"div"),s("span",{style:{color:"#D19A66"}}," class"),s("span",{style:{color:"#ABB2BF"}},"="),s("span",{style:{color:"#98C379"}},'"Footer"'),s("span",{style:{color:"#ABB2BF"}},">Footer</"),s("span",{style:{color:"#E06C75"}},"div"),s("span",{style:{color:"#ABB2BF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"    </"),s("span",{style:{color:"#E06C75"}},"div"),s("span",{style:{color:"#ABB2BF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"</"),s("span",{style:{color:"#E06C75"}},"body"),s("span",{style:{color:"#ABB2BF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"</"),s("span",{style:{color:"#E06C75"}},"html"),s("span",{style:{color:"#ABB2BF"}},">")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})]),s("div",{class:"collapsed-lines"})],-1)])),_:1},8,["config"]),n[10]||(n[10]=c(`<h2 id="flex布局" tabindex="-1"><a class="header-anchor" href="#flex布局"><span>flex布局</span></a></h2><p>一维布局，控制一条轴上，所有子元素的排列方式，默认主轴为横轴，交叉轴为纵轴。</p><blockquote><p>参考：https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox</p></blockquote><h2 id="绝对定位与相对定位" tabindex="-1"><a class="header-anchor" href="#绝对定位与相对定位"><span>绝对定位与相对定位</span></a></h2><p>将某个元素<strong>positon</strong>这个属性设置为relative为相对定位，absolute为绝对定位<br><strong>相对定位</strong>：就是自己的在dom中的位置不改变，但是在浏览器展示的时候会发生变化<br><strong>绝对定位</strong>：从父节点一路找到body节点为止找到相对定位的元素，以这个元素做固定位置</p><blockquote><p>参考：https://developer.mozilla.org/zh-CN/docs/Learn_web_development/Core/CSS_layout/Positioning</p></blockquote><h2 id="z-index的作用" tabindex="-1"><a class="header-anchor" href="#z-index的作用"><span>z-index的作用</span></a></h2><p>控制某个元素的渲染顺序，调整整个页面的层叠上下文<br><strong>z-index:auto</strong> 默认根据后出现的元素会覆盖到前面出现的元素<br><strong>z-index: int</strong> 后面的数字越大越在上面，如果依附在更高层级上的盒子，则把父元素结合子元素的z-index理解成版本号，进行顺序的层叠</p><blockquote><p>参考：https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_positioned_layout/Stacking_context</p></blockquote><h2 id="html元素display属性有几种" tabindex="-1"><a class="header-anchor" href="#html元素display属性有几种"><span>html元素display属性有几种</span></a></h2><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#ABB2BF;">display: block; /** 块级元素下个元素换行 */</span></span>
<span class="line"><span style="color:#ABB2BF;">display: inline; /** 行级元素下个元素不换行 */</span></span>
<span class="line"><span style="color:#ABB2BF;">display: inline-block; /** 行块级元素 */</span></span>
<span class="line"><span style="color:#ABB2BF;">display: flex; /** 子元素成flex布局 */</span></span>
<span class="line"><span style="color:#ABB2BF;">display: inline-flex; /** 元素本身成为行内元素，子元素成flex布局 */</span></span>
<span class="line"><span style="color:#ABB2BF;">display: grid; /** 子元素成网格布局 */</span></span>
<span class="line"><span style="color:#ABB2BF;">display: inline-grid; /** 元素本身成为行内元素，子元素成网格布局 */</span></span>
<span class="line"><span style="color:#ABB2BF;">...</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>参考：https://developer.mozilla.org/zh-CN/docs/Web/CSS/display<br> https://blog.csdn.net/qq_40561863/article/details/129863600</p></blockquote><div class="hint-container tip"><p class="hint-container-title">目前理解</p><p>使用网格布局+媒体查询控制整体的布局,子区域内使用flex布局</p></div>`,13))])}}},C=JSON.parse('{"path":"/study/frrk4txi/","title":"布局与拖拽","lang":"zh-CN","frontmatter":{"title":"布局与拖拽","createTime":"2025/03/19 10:31:08","permalink":"/study/frrk4txi/"},"readingTime":{"minutes":4.84,"words":1453},"git":{"createdTime":1742223618000,"updatedTime":1743496582000,"contributors":[{"name":"haomingze","username":"","email":"13261764+haomingze@user.noreply.gitee.com","commits":3,"avatar":"https://gravatar.com/avatar/56291d09a2d74fd2b3b35332ee79e160346be75633cdb749e82690c73eee8d6e?d=retro"}]},"filePathRelative":"notes/每周一学/2.第二周学习/1.布局与拖拽.md","headers":[]}');export{v as comp,C as data};
