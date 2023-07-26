// useDisableTextSelection.js
import { onMounted, onUnmounted } from 'vue';

export function useDisableTextSelection(elements) {
  // 对需要限制文本选择的元素或ref的数组进行循环处理
  elements.forEach(element => {
    // 禁用文本选择的逻辑
    function disableTextSelection() {
      if (element.value) {
        element.value.style.userSelect = 'none';
      }
    }

    // 启用文本选择的逻辑
    function enableTextSelection() {
      if (element.value) {
        element.value.style.userSelect = 'auto';
      }
    }

    // 在组件挂载时调用禁用文本选择
    onMounted(disableTextSelection);

    // 在组件卸载时调用启用文本选择
    onUnmounted(enableTextSelection);
  });
}
