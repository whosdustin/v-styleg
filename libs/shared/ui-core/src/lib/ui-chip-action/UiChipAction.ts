import {
    Vue,
    Component,
    Prop,
} from 'vue-property-decorator';

import UiChipIcon from '../ui-chip-icon';

@Component({
    components: {
        UiChipIcon,
    },
})
export default class UiChipAction extends Vue {
    @Prop({ type: String }) public icon!: string;
}
