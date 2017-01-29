$(document).ready(function(){
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("active");
       // alert(1);
    })
});

$(document).ready(function(){
$("#sleg").click(function(){
   $("#Legislators").css("display","block");
    $("#Bills").css("display","none");
    $("#Committees").css("display","none");
    $("#Favourites").css("display","none");
    
});
$("#sbill").click(function(){
   $("#Legislators").css("display","none");
    $("#Bills").css("display","block");
    $("#Committees").css("display","none");
    $("#Favourites").css("display","none");
    
});
$("#scomm").click(function(){
    $("#Legislators").css("display","none");
    $("#Bills").css("display","none");
    $("#Committees").css("display","block");
    $("#Favourites").css("display","none");
    
});
$("#sfav").click(function(){
   $("#Legislators").css("display","none");
    $("#Bills").css("display","none");
    $("#Committees").css("display","none");
    $("#Favourites").css("display","block");
});
});
       
myapp=angular.module('myapp',['angularUtils.directives.dirPagination','ngStorage']);

myapp.controller('mycontroller4',function($scope,$localStorage,$http){
         
            $http.get("index.php",{params:{"param":
                "com"}}).then(function(response){
                      $scope.mydata4=response;
                    //    console.log($scope.mydata4);
                                              });
            
                                            });



myapp.controller('mycontroller3',function($rootScope,$localStorage,$http){
           
            $http.get("index.php",{params:{"param":
                "bi"}}).then(function(response){
                    $rootScope.mydata3=response;
                        $rootScope.billdetails = function(data)
                            {
                               $rootScope.bd = data;
                            //   console.log($rootScope.bd);
                                $rootScope.intro= new Date($rootScope.bd.introduced_on);
                            };
                       
                    
            //        console.log($rootScope.mydata3);
                            $rootScope.isActive = function(data) {
                                return data.history.active;};
                                              });
            
                                            });


myapp.controller('mycontroller2',function($scope,$localStorage,$http){
            
            $http.get("index.php",{params:{"param":
                "legis"}}).then(function(response){
                      $scope.mydata2=response;
                   //     console.log($scope.mydata2);
                                              });
            
                                            });


myapp.controller('mycontroller1',function($scope,$localStorage,$http){
            
    
            $http.get("index.php",{params:{"param":
                "legis"}}).then(function(response){
                      $scope.mydata1=response;
                       // console.log($scope.mydata1);
                                              });          
                                            
                                            });

myapp.controller('mycontroller',function($rootScope,$localStorage,$http){
            
        $http.get("index.php",{params:{"param":"legis"}}).then(function(response){
            $rootScope.mydata=response;
                        });
 
                 $rootScope.legdetails = function(data){
                     
                     $rootScope.record=data;
                 
                    
                     $http.get("index.php",{params:{"param":"top5b","sponsorid":$rootScope.record.bioguide_id}}).then(function(response){$rootScope.bill5data=response;
                     //   console.log($rootScope.bill5data);
                                              });
                               
                     $http.get("index.php",{params:{"param":"top5c","memid":$rootScope.record.bioguide_id}}).then(function(response){$rootScope.comm5data=response;
                                //console.log($rootScope.comm5data);
                                              });
                    
                    $rootScope.startterm= new Date($rootScope.record.term_start);
                     $rootScope.endterm= new Date($rootScope.record.term_end);
                     $rootScope.bday=new Date($rootScope.record.birthday);
                     
                        var today = moment(new Date());
                        var s= moment($rootScope.startterm); //todays date
                        var e = moment($rootScope.endterm); // another date
                        var duration = moment.duration(e.diff(s));
                        var days = duration.asDays();
                        var durationn = moment.duration(today.diff(s));
                        var daysn = durationn.asDays();
                        $rootScope.percent = Math.round((daysn/days) * 100);
                     
//                     $rootScope.prog = moment.duration($rootScope.endterm.diff($rootScope.startterm));
//                     $rootScope.h = prog.asHours();
//                     console.log($rootScope.h);
                 };
    
                $rootScope.favhandle = function(favinput){
                    
                  //console.log(favinput);
                    $rootScope.favorite=JSON.stringify(favinput);
                    $rootScope.lid = JSON.stringify(favinput.bioguide_id);
                    
                    $rootScope.saved = localStorage.getItem('favleg');
	                $rootScope.fav = (localStorage.getItem('favleg')!==null) ? JSON.parse($scope.saved) : [ ];
                    localStorage.setItem('favleg', JSON.stringify($rootScope.fav));
                       
                        $rootScope.addfav = function() {
		                  
                            var oldfavs = $rootScope.
                            $rootScope.favs.push({
                            id: $rootScope.lid,
                            text: $rootScope.favourite,
                        });
                            
                            localStorage.setItem('favleg', JSON.stringify($rootScope.fav));
                    
                };
    
    
    
                 };
});

