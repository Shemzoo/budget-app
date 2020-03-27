'use strict';

let budgetController = (function() {
    

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

    let DOM = UICtrl.getDOMstrings();
    
    let ctrlAddItem = function() {
        // 1. Get the input data

        let input = UICtrl.getInput(); 

        console.log(input);

        // 2. Add the item to the budget cotroller

        // 3. Add the item to the UI

        // 4. Calculate the budget 

        // 5. Display the budget on the UI

    }


    document.querySelector(DOM.inputButton).addEventListener('click', ctrlAddItem); 

    document.addEventListener('keypress', function(event) {
        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }
    });
 
})(budgetController, UIController);