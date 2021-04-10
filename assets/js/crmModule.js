{
    // method to submit the customer details for new customer using ajax

    let createCustomer = function(){
        let newCustomer = $('#new-customer');

        newCustomer.submit(function(e){
            e.preventDefault();

            $.ajax({
                type : 'post',
                url : '/customer/createCustomer',
                data : newCustomer.serialize(),
                success : function(data){
                    // console.log(data);
                    // console.log(data.data.customerPD)
                    let newCustomer = newCustomerDOM(data.data.customerPD);
                    $("#customer-list-container > ul").append(newCustomer);
                    deleteCustomer($(' .delete-customer-button', newCustomer));
                }, error : function(error){
                    console.log(error.responseText);
                }
            });
        });
    }

    

    // method to create customer in DOM
    let newCustomerDOM = function(customer){
        console.log(`${ customer }`);
        return $(`<li id="customer-${ customer._id }">
                    <small>
                        <a class="delete-customer-button" href="/customer/destroy/${ customer._id }">DELETE</a>
                    </small>
                    ${ customer.first_name }
                    ${ customer.last_name }
                    <p>DEVELOPMENT NOTE: This is for testing ajax request only! Not displaying full info right now - testing-DONE RIGHT</p>
                </li><br>`)
    }

    // method to delete customer from dom
    let deleteCustomer = function(deleteLink){
        $(deleteLink).click(function(e){
            e.preventDefault();

            $.ajax({
                type : 'get',
                url : $(deleteLink).prop('href'),
                success : function(data){
                    console.log(data);
                    $(`#customer-${ data.data.customer_id }`).remove();
                },error : function(error){
                    console.log(error.responseText);
                }
            });
        });
    }
   

    createCustomer();

    
}