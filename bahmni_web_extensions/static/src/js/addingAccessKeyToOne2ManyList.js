openerp.bahmni_web_extensions = function(instance) {
    instance.web.form.One2ManyList.include({
        pad_table_to: function () {
            this._super.apply(this, arguments);
            var add_item_link = this.$current.find("td.oe_form_field_one2many_list_row_add a");
            add_item_link.attr("accesskey", "I");
            add_item_link.text("Add an [I]tem");
        }
    });
}