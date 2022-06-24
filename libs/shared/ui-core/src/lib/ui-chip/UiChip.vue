<template>
    <span
        :class="classList"
        role="row"
    >
        <ui-chip-action>
            <!-- @slot Chip text -->
            <slot></slot>
        </ui-chip-action>
    </span>
</template>

<script lang="ts" src="./UiChip.ts"></script>
<style lang="scss" src="./UiChip.scss"></style>
