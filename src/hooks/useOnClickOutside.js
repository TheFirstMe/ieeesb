import { useEventListener } from '.'

export function useOnClickOutside(ref, handler, ignore, events) {
  if (!events) events = [`mousedown`, `touchstart`]
  const detectClickOutside = event => {
    if(ignore && event && ignore.current.contains(event.target))
      return; 
    ref.current && event && !ref.current.contains(event.target) && handler(event)
  }
  useEventListener(events, detectClickOutside)
}