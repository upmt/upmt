import { Z as createDirective, $ as isKeyCode, a0 as getPortalProxy, a1 as closePortals, D as inject, a2 as quasarKey } from "./index-DwHwL6YO.js";
function getDepth(value) {
  if (value === false) {
    return 0;
  }
  if (value === true || value === void 0) {
    return 1;
  }
  const depth = parseInt(value, 10);
  return isNaN(depth) ? 0 : depth;
}
const ClosePopup = createDirective(
  {
    name: "close-popup",
    beforeMount(el, { value }) {
      const ctx = {
        depth: getDepth(value),
        handler(evt) {
          ctx.depth !== 0 && setTimeout(() => {
            const proxy = getPortalProxy(el);
            if (proxy !== void 0) {
              closePortals(proxy, evt, ctx.depth);
            }
          });
        },
        handlerKey(evt) {
          isKeyCode(evt, 13) === true && ctx.handler(evt);
        }
      };
      el.__qclosepopup = ctx;
      el.addEventListener("click", ctx.handler);
      el.addEventListener("keyup", ctx.handlerKey);
    },
    updated(el, { value, oldValue }) {
      if (value !== oldValue) {
        el.__qclosepopup.depth = getDepth(value);
      }
    },
    beforeUnmount(el) {
      const ctx = el.__qclosepopup;
      el.removeEventListener("click", ctx.handler);
      el.removeEventListener("keyup", ctx.handlerKey);
      delete el.__qclosepopup;
    }
  }
);
function useQuasar() {
  return inject(quasarKey);
}
export {
  ClosePopup as C,
  useQuasar as u
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlLXF1YXNhci1CZFRnYmhOUS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvZGlyZWN0aXZlcy9jbG9zZS1wb3B1cC9DbG9zZVBvcHVwLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9zYWJsZXMvdXNlLXF1YXNhci91c2UtcXVhc2FyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZURpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUuY3JlYXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IGNsb3NlUG9ydGFscywgZ2V0UG9ydGFsUHJveHkgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlLnBvcnRhbC9wb3J0YWwuanMnXG5pbXBvcnQgeyBpc0tleUNvZGUgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlLmtleWJvYXJkL2tleS1jb21wb3NpdGlvbi5qcydcbmltcG9ydCBnZXRTU1JQcm9wcyBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlLm5vb3Atc3NyLWRpcmVjdGl2ZS10cmFuc2Zvcm0vbm9vcC1zc3ItZGlyZWN0aXZlLXRyYW5zZm9ybS5qcydcblxuLypcbiAqIGRlcHRoXG4gKiAgIDwgMCAgLS0+IGNsb3NlIGFsbCBjaGFpblxuICogICAwICAgIC0tPiBkaXNhYmxlZFxuICogICA+IDAgIC0tPiBjbG9zZSBjaGFpbiB1cCB0byBOIHBhcmVudFxuICovXG5cbmZ1bmN0aW9uIGdldERlcHRoICh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIDBcbiAgfVxuICBpZiAodmFsdWUgPT09IHRydWUgfHwgdmFsdWUgPT09IHZvaWQgMCkge1xuICAgIHJldHVybiAxXG4gIH1cblxuICBjb25zdCBkZXB0aCA9IHBhcnNlSW50KHZhbHVlLCAxMClcbiAgcmV0dXJuIGlzTmFOKGRlcHRoKSA/IDAgOiBkZXB0aFxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVEaXJlY3RpdmUoX19RVUFTQVJfU1NSX1NFUlZFUl9fXG4gID8geyBuYW1lOiAnY2xvc2UtcG9wdXAnLCBnZXRTU1JQcm9wcyB9XG4gIDoge1xuICAgICAgbmFtZTogJ2Nsb3NlLXBvcHVwJyxcblxuICAgICAgYmVmb3JlTW91bnQgKGVsLCB7IHZhbHVlIH0pIHtcbiAgICAgICAgY29uc3QgY3R4ID0ge1xuICAgICAgICAgIGRlcHRoOiBnZXREZXB0aCh2YWx1ZSksXG5cbiAgICAgICAgICBoYW5kbGVyIChldnQpIHtcbiAgICAgICAgICAgIC8vIGFsbG93IEBjbGljayB0byBiZSBlbWl0dGVkXG4gICAgICAgICAgICBjdHguZGVwdGggIT09IDAgJiYgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHByb3h5ID0gZ2V0UG9ydGFsUHJveHkoZWwpXG4gICAgICAgICAgICAgIGlmIChwcm94eSAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgICAgICAgY2xvc2VQb3J0YWxzKHByb3h5LCBldnQsIGN0eC5kZXB0aClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9LFxuXG4gICAgICAgICAgaGFuZGxlcktleSAoZXZ0KSB7XG4gICAgICAgICAgICBpc0tleUNvZGUoZXZ0LCAxMykgPT09IHRydWUgJiYgY3R4LmhhbmRsZXIoZXZ0KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGVsLl9fcWNsb3NlcG9wdXAgPSBjdHhcblxuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGN0eC5oYW5kbGVyKVxuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGN0eC5oYW5kbGVyS2V5KVxuICAgICAgfSxcblxuICAgICAgdXBkYXRlZCAoZWwsIHsgdmFsdWUsIG9sZFZhbHVlIH0pIHtcbiAgICAgICAgaWYgKHZhbHVlICE9PSBvbGRWYWx1ZSkge1xuICAgICAgICAgIGVsLl9fcWNsb3NlcG9wdXAuZGVwdGggPSBnZXREZXB0aCh2YWx1ZSlcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgYmVmb3JlVW5tb3VudCAoZWwpIHtcbiAgICAgICAgY29uc3QgY3R4ID0gZWwuX19xY2xvc2Vwb3B1cFxuICAgICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGN0eC5oYW5kbGVyKVxuICAgICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXl1cCcsIGN0eC5oYW5kbGVyS2V5KVxuICAgICAgICBkZWxldGUgZWwuX19xY2xvc2Vwb3B1cFxuICAgICAgfVxuICAgIH1cbilcbiIsImltcG9ydCB7IGluamVjdCB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHsgcXVhc2FyS2V5IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5zeW1ib2xzL3N5bWJvbHMuanMnXG5cbi8qKlxuICogUmV0dXJucyB0aGUgJHEgaW5zdGFuY2UuXG4gKiBFcXVpdmFsZW50IHRvIGB0aGlzLiRxYCBpbnNpZGUgdGVtcGxhdGVzLlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VRdWFzYXIgKCkge1xuICByZXR1cm4gaW5qZWN0KHF1YXNhcktleSlcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBWUEsU0FBUyxTQUFVLE9BQU87QUFDeEIsTUFBSSxVQUFVLE9BQU87QUFDbkIsV0FBTztBQUFBLEVBQ1Q7QUFDQSxNQUFJLFVBQVUsUUFBUSxVQUFVLFFBQVE7QUFDdEMsV0FBTztBQUFBLEVBQ1Q7QUFFQSxRQUFNLFFBQVEsU0FBUyxPQUFPLEVBQUU7QUFDaEMsU0FBTyxNQUFNLEtBQUssSUFBSSxJQUFJO0FBQzVCO0FBRUEsTUFBQSxhQUFlO0FBQUEsRUFFWDtBQUFBLElBQ0UsTUFBTTtBQUFBLElBRU4sWUFBYSxJQUFJLEVBQUUsU0FBUztBQUMxQixZQUFNLE1BQU07QUFBQSxRQUNWLE9BQU8sU0FBUyxLQUFLO0FBQUEsUUFFckIsUUFBUyxLQUFLO0FBRVosY0FBSSxVQUFVLEtBQUssV0FBVyxNQUFNO0FBQ2xDLGtCQUFNLFFBQVEsZUFBZSxFQUFFO0FBQy9CLGdCQUFJLFVBQVUsUUFBUTtBQUNwQiwyQkFBYSxPQUFPLEtBQUssSUFBSSxLQUFLO0FBQUEsWUFDcEM7QUFBQSxVQUNGLENBQUM7QUFBQSxRQUNIO0FBQUEsUUFFQSxXQUFZLEtBQUs7QUFDZixvQkFBVSxLQUFLLEVBQUUsTUFBTSxRQUFRLElBQUksUUFBUSxHQUFHO0FBQUEsUUFDaEQ7QUFBQSxNQUFBO0FBR0YsU0FBRyxnQkFBZ0I7QUFFbkIsU0FBRyxpQkFBaUIsU0FBUyxJQUFJLE9BQU87QUFDeEMsU0FBRyxpQkFBaUIsU0FBUyxJQUFJLFVBQVU7QUFBQSxJQUM3QztBQUFBLElBRUEsUUFBUyxJQUFJLEVBQUUsT0FBTyxZQUFZO0FBQ2hDLFVBQUksVUFBVSxVQUFVO0FBQ3RCLFdBQUcsY0FBYyxRQUFRLFNBQVMsS0FBSztBQUFBLE1BQ3pDO0FBQUEsSUFDRjtBQUFBLElBRUEsY0FBZSxJQUFJO0FBQ2pCLFlBQU0sTUFBTSxHQUFHO0FBQ2YsU0FBRyxvQkFBb0IsU0FBUyxJQUFJLE9BQU87QUFDM0MsU0FBRyxvQkFBb0IsU0FBUyxJQUFJLFVBQVU7QUFDOUMsYUFBTyxHQUFHO0FBQUEsSUFDWjtBQUFBLEVBQUE7QUFFTjtBQzNEZSxTQUFTLFlBQWE7QUFDbkMsU0FBTyxPQUFPLFNBQVM7QUFDekI7IiwieF9nb29nbGVfaWdub3JlTGlzdCI6WzAsMV19
