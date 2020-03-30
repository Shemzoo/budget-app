let budgetController = (function() {
        let Expense = function(id, description, value) {
            this.id = id;
            this.description = description;
            this.value = value;
        };

        let Income = function(id, description, value) {
            this.id = id;
            this.description = description;
            this.value = value;
        };

        let allExpenses = [];
        let allIncomes = [];

        let data = {
            allItems: {
                exp: [],
                inc: []
            },

            totals: {
                exp: 0,
                inc: 0
            }
        }
})();


let UIController = (function() {
    let DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputButton: '.add__btn'
    }

    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMstrings.inputType).value, // Will be either inc or exp
                description: document.querySelector(DOMstrings.inputDescription).value, // Will be string
                value: document.querySelector(DOMstrings.inputValue).value
            };
            
        },

        getDOMstrings: function() {
            return DOMstrings;
        }
    }
    
})();

let controller = (function(budgetCtrl, UICtrl) {

    let setupEventListeners = function() {
        let DOM = UICtrl.getDOMstrings();

        document.querySelector(DOM.inputButton).addEventListener('click', ctrlAddItem); 

        document.addEventListener('keypress', function(event) {
            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }
        });
    };
    
    let ctrlAddItem = function() {
        // 1. Get the input data

        let input = UICtrl.getInput(); 

        // 2. Add the item to the budget cotroller

        // 3. Add the item to the UI

        // 4. Calculate the budget 

        // 5. Display the budget on the UI

    };

    return {
        init: function() {
            console.log('Application has started.');
            setupEventListeners();
        }
    };
 
})(budgetController, UIController);

controller.init();