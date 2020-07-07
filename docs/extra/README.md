---
title: AntDocs 扩展脚本/样式
---

<h1 style="text-align:center">扩展脚本/样式</h1>   

<div class="mobile-adapt">除了使用插件以外，我们还可以直接通过注入脚本或者样式的方式来实现自己想要的效果，这样做不仅快捷方便，还能减少 VuePress 项目臃肿的体积哦！让我们来看看开发者们贡献了哪些脚本/样式吧！</div> 
<p>&emsp;</p>   
<a-row type="flex" justify="space-around">
	<a-col :sm="24" :md="12" :lg="6" class="reset-padding">
		<a-card hoverable>
			<div class="card-tag tag-js">JS</div>
			<img src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" slot="cover"  class="reset-height"/>
			<template class="ant-card-actions" slot="actions">
				<a href="https://www.baidu.com/" target="_blank" rel="noopener noreferrer">
					<a-button type="primary" ghost>下载</a-button>
				</a>
				<a href="https://www.baidu.com/" target="_blank" rel="noopener noreferrer" class="reset-align">
					<a-icon type="github" />
				</a>
			</template>
			<a-card-meta title="首页Star徽标脚本" description="作者：左撇峰子" />
		</a-card>
	</a-col>
	<a-col :sm="24" :md="12" :lg="6" class="reset-padding">
		<a-card hoverable>
			<div class="card-tag tag-js">JS</div>
			<img src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" slot="cover"  class="reset-height"/>
			<template class="ant-card-actions" slot="actions">
				<a href="https://www.baidu.com/" target="_blank" rel="noopener noreferrer">
					<a-button type="primary" ghost>下载</a-button>
				</a>
				<a href="https://www.baidu.com/" target="_blank" rel="noopener noreferrer" class="reset-align">
					<a-icon type="github" />
				</a>
			</template>
			<a-card-meta title="首页多个徽标脚本" description="作者：左撇峰子" />
		</a-card>
	</a-col>
	<a-col :sm="24" :md="12" :lg="6" class="reset-padding">
	</a-col>
	<a-col :sm="24" :md="12" :lg="6" class="reset-padding">
	</a-col>
</a-row>





<style>
.reset-align{
	font-size: 1.6rem;
  vertical-align: -webkit-baseline-middle;
}


.card-tag {
	position: absolute;
	padding: 4px 7px 4px 14px;
	border-radius: 50px 0 0 50px;
	border: 1px solid transparent;
	border-right-color: transparent !important;
	right: 0;
	top: 10px;
	z-index: 20;
	text-align: center;
	user-select: none;
}
.tag-css {
	color: #52c41a;
	background: #f6ffed;
	border-color: #b7eb8f;
}
.tag-js {
	color: #fa8c16;
	background: #fff7e6;
	border-color: #ffd591;
}


</style>

