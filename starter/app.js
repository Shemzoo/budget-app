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

        return {
            addItem: function(type, des, val) {
                let newItem, ID;


                // create new ID
                if (data.allItems[type].length > 0) {
                    ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
                } else {
                    ID = 0;
                }
                

                // create new item based on 'inc' or 'exp' type
                if (type === 'exp') {
                    newItem = new Expense(ID, des, val)
                } else if (type === 'inc') {
                    newItem = new Income(ID, des, val)
                }

                // push it into our data sctructure
                data.allItems[type].push(newItem);

                // return the new element 
                return newItem;
            },

            testing: function() {
                console.log(data);
            }
        }

})();


let UIController = (function() {
    let DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputButton: '.add__btn',
        incomeContainer: '.income__list', 
        expensesContainer: '.expenses__list'                                  
    }

    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMstrings.inputType).value, // Will be either inc or exp
                description: document.querySelector(DOMstrings.inputDescription).value, // Will be string
                value: document.querySelector(DOMstrings.inputValue).value
            };
            
        },

        addListItem: function(obj, type) {
            // create HTML string with placeholer text
            let html, newHTML, element;
            
            if (type === 'inc') {
                element = DOMstrings.incomeContainer;
                
                html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';

            } else if (type === 'exp') {
                element = DOMstrings.expensesContainer;

                html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';

            }   
         
            // replace placeholder text with some actual data
            newHTML = html.replace('%id%', obj.id);
            newHTML = newHTML.replace('%description%', obj.description);
            newHTML = newHTML.replace('%value%', obj.value);

            // insert HTML into the DOM
            document.querySelector(element).insertAdjacentHTML('beforeend', newHTML);
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
        let newItem = budgetCtrl.addItem(input.type, input.description, input.value);

        // 3. Add the item to the UI
        UICtrl.addListItem(newItem, input.type);

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