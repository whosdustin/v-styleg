import { Vue, Component } from 'vue-property-decorator';

import UiChipAction from '../ui-chip-action/UiChipAction.vue';

@Component({
    components: {
        UiChipAction,
    },
})
export default class UiChip extends Vue {}
