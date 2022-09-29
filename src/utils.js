import { onDestroy } from "svelte";

/**
 * @param {CallableFunction} callback
 * @param {number} milliseconds
 */
export function onInterval(callback, milliseconds)
{
    const interval = setInterval(callback, milliseconds)
    onDestroy(() => { clearInterval(interval) })
}
