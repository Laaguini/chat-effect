<div class="messages-loader">
    <div class="point point-1"/>
    <div class="point point-2"/>
    <div class="point point-3"/>
</div>

<style lang="sass">
@keyframes pointer
    0%
        transform: translateY(1px)
        opacity: 0.5
    50%
        transform: translateY(-1px)
        opacity: 1
    100%
        transform: translateY(1px)
        opacity: 0.5


.messages-loader
    display: flex
    gap: 5px

.point
    animation: ease-in 1s pointer var(--delay) infinite
    width: 8px
    height: 8px
    border-radius: 1rem
    background-color: var(--text-color)

.point-1
    --delay: 0ms
.point-2
    --delay: calc(1s/3)
.point-3
    --delay: calc(1s/3*2)
</style>