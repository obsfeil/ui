<!-- eslint-disable vue/no-v-html -->
<template>
  <UAlert title="Heads <i>up</i>!" icon="i-heroicons-command-line">
    <template #title="{ title }">
<<<<<<< HEAD
      <!-- eslint-disable-next-line vue/no-v-html -->
=======
      // eslint-disable-next-line vue/no-v-html
>>>>>>> de4bf7bb885638425bc37b928c070c97e292202d
      <span v-html="title" />
    </template>

    <template #description>
      You can add <b>components</b> to your app using the <u>cli</u>.
    </template>
  </UAlert>
</template>
