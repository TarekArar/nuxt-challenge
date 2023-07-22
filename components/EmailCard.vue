<script setup>
const props = defineProps({
  id: { type: Number, required: true },
  text: { type: String, required: true },
  archived: { type: Boolean, required: true },
  selected: { type: Boolean, required: true },
  read: { type: Boolean, required: true },
});

const emit = defineEmits(["click", "select"]);

const onEmailClick = () => emit("click", props.id);

const onSelect = (event) => emit("select", props, event.target.checked);
</script>

<template>
  <div :class="{ email: true, 'email--disabled': read }" @click="onEmailClick">
    <input type="checkbox" :value="selected" @click.stop="onSelect" />
    <p class="email-title">{{ text }}</p>
  </div>
</template>

<style scoped>
.email {
  display: flex;
  height: 60px;
  width: calc(100vw - 260px);
  padding: 0px 24px;
  align-items: center;
  gap: 15px;
  align-self: stretch;

  border: 1px solid #e5e7eb;
  background: #fff;
}

.email-title {
  color: #121829;
  font-family: Preevio;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.email--disabled {
  opacity: 0.5;
}
</style>
