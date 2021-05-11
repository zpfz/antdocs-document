<template>
  <a-col :sm="24" :md="12" :lg="8">
		<a-card hoverable>
			<img :src="cover" slot="cover" class="reset-height"/>
			<template class="ant-card-actions" slot="actions">
				<a :href="link" target="_blank" rel="noopener noreferrer">
					<a-button type="primary" ghost>直达访问</a-button>
				</a>
			</template>
			<a-card-meta :title="title" :description="author">
			</a-card-meta>
		</a-card>
	</a-col>
</template>
<script>
export default {
  name:"Card",
  props:[
    "cover",
    "link",
    "title",
    "author"
  ]
}
</script>