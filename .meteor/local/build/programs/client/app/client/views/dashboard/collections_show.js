(function(){Template.dashboardShow.helpers({
    settings: function () {
        return {
            rowsPerPage: 10,
            showFilter: true,
            fields: ['_id','type']
        };
    }
});

})();
