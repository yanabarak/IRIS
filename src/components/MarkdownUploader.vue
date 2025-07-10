<template>
  <div>
    <div class="d-flex align-items-center">
      <div
        class="drop-zone col"
        @dragover.prevent
        @dragenter.prevent="isDragging = true"
        @dragleave.prevent="isDragging = false"
        @drop.prevent="handleDrop"
        :class="{ dragging: isDragging }"
      >
        <p v-if="!fileName">
          Перетягни .md файл сюди або
          <span class="underline" @click="triggerFileInput">вибери файл</span>
        </p>
        <p v-else><strong>Файл:</strong> {{ fileName }}</p>
      </div>

      <div v-if="fileName" class="col-auto">
        <button @click="clearStoredFile" class="btn main-btn">Очистити файл</button>
      </div>
      <input ref="fileInput" type="file" accept=".md" @change="handleFile" style="display: none" />
    </div>

    <!-- Markdown preview -->
    <div v-if="markdownContent" v-html="renderedMarkdown" class="markdown-preview"></div>
  </div>
</template>

<script>
import { marked } from 'marked';
const renderer = new marked.Renderer();

renderer.paragraph = function (text) {
  const content = typeof text === 'string' ? text : text.text;
  return `<pre>${content}</pre>`;
};

export default {
  props: {
    storageKey: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      fileName: '',
      markdownContent: '',
      isDragging: false,
      internalStorageKey: '', // Окреме поле
    };
  },
  watch: {
    '$route.query.key': {
      immediate: true,
      handler(val) {
        if (val) this.internalStorageKey = val;
      },
    },
  },
  created() {
    const key = this.internalStorageKey;
    const storedContent = localStorage.getItem(`${key}-content`);
    const storedName = localStorage.getItem(`${key}-fileName`);
    if (storedContent && storedName) {
      this.markdownContent = storedContent;
      this.fileName = storedName;
    }
  },

  computed: {
    renderedMarkdown() {
      return marked(this.markdownContent, { renderer });
    },
  },
  methods: {
    triggerFileInput() {
      this.$refs.fileInput.click();
    },
    handleFile(event) {
      const file = event.target.files[0];
      if (file) this.readFile(file);
    },
    handleDrop(event) {
      this.isDragging = false;
      const file = event.dataTransfer.files[0];
      if (file) this.readFile(file);
    },
    readFile(file) {
      if (!file.name.endsWith('.md')) {
        alert('Будь ласка, вибери файл з розширенням .md');
        return;
      }

      this.fileName = file.name;
      localStorage.setItem(`${this.internalStorageKey}-fileName`, file.name);

      const reader = new FileReader();
      reader.onload = e => {
        this.markdownContent = e.target.result;
        localStorage.setItem(`${this.internalStorageKey}-content`, e.target.result);
      };
      reader.readAsText(file);
    },
    clearStoredFile() {
      this.fileName = '';
      this.markdownContent = '';
      localStorage.removeItem(`${this.internalStorageKey}-fileName`);
      localStorage.removeItem(`${this.internalStorageKey}-content`);
      this.$refs.fileInput.value = '';
    },
  },
};
</script>
