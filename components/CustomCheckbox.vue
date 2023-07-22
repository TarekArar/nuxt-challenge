<script setup>
const props = defineProps({
  modelValue: { type: [Array, Boolean] },
  value: { type: [Boolean, Object] },
  label: { type: String },
});
const emit = defineEmits(["update:modelValue"]);

const model = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});
</script>

<template>
  <div class="checkbox__container">
    <input
      class="custom__checkbox"
      type="checkbox"
      v-model="model"
      :value="value"
    />
    <label></label>
  </div>
</template>

<style scoped>
.checkbox__container {
  display: flex;
  gap: 15px;
}

.custom__checkbox {
  position: absolute;
  z-index: -1;
  opacity: 0;
}

.custom__checkbox + label {
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.custom__checkbox + label::before {
  content: "";
  display: inline-block;
  width: 1em;
  height: 1em;
  flex-shrink: 0;
  flex-grow: 0;
  border: 1px solid #c3c3c3;
  border-radius: 0.25em;
  margin-right: 0.5em;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 90% 90%;
}

.custom__checkbox:checked + label::before {
  border-color: #0968fe;
  background-color: #0968fe;
  background-image: url("@/assets/icons/check.svg");
}
</style>
