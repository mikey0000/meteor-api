(function(){Template.dashboardShow.helpers({
    settings: function () {
    	mappedFields = this.properties
        return {
            rowsPerPage: 10,
            showFilter: true,
            fields: mappedFields//['_id','type']
        };
    }
});

})();
