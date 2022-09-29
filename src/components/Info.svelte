<script>
    export let name
    export let version
    export let speed
    export let website
</script>

<p>
    The <code>{name}</code> package is {speed} fast.
    Download version {version} from <a href="https://www.npmjs.com/package/{name}" target="_blank">npm</a>
    and <a href={website} target="_blank">learn more here</a>
</p>
