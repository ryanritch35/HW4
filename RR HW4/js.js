var $mult_table = $('#mult');//take the inputs from the form mult
    $mult_table.validate({
                         rules:{
                         l_min: {
                        required: true,
                        number :true ,
                        range: [-50, 50]
                         
                         },
                               l_max: {
                         required:true,
                         number:true,
                         range: [-50, 50]//error already gives error message to start,
                         
                         },
                               t_min:{
                         required: true,
                             number:true,
                         range: [-50, 50]
                         
                         },
                               t_max: {
                        required: true,
                             number:true,
                        range: [-50, 50]
                         },
                         },
                         
                         message:{
                       
                            l_min: {
                               required: 'Please enter number!'//errror message for the left_min
                               
                               },
                            l_max: {
                               required: 'Please enter number!',//errror message for the left_max
    
                               },
                            t_min: {
                               required: 'Please enter a number!'//errror message for the right_min
                               },
                            t_max: {
                               required: 'Please enter a nunber!',//errror message for the right_max
                               },
                               },
                            errorPlacement: function(error, element)// take in error and the element it occurs
                               {
                            error.insertAfter( element );//insert after the element or the text box
                               }
                               });

