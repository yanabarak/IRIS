export default {
    data() {
        return {};
    },
    methods: {
        notifySuccess(string = this.$t('title.item')) {
            this.$toast.success(`${ string } ${ this.$t('title.addSuccessfully') }`);
        },
        notifySuccessUpdate(string = this.$t('title.item')) {
            this.$toast.success(`${ string } ${ this.$t('title.updateSuccessfully') }`);
        },
        notifySuccessWithMsg(description) {
            this.$toast.success(`${ description }`);
        },
        notifyWarning(string = this.$t('title.item')) {
            this.$toast.warning(`${ string } ${ this.$t('title.updateSuccessfully') }`);
        },
        notifyWarningWithMsg(description) {
            this.$toast.warning(`${ description }`);
        },
        notifyError() {
            this.$toast.error(`${ this.$t('title.errorMessage') }`);
        },
        notifyErrorWithMsg(description) {
            this.$toast.error(`${ description }`);
        },
    }
};
