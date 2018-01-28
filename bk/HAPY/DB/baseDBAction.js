

[].pre('save', function (next) {
    var currentDate = new Date();
    this.update_date = currentDate;

    if (!this.created_date) {
        this.created_date = currentDate;
    }

    next();
});