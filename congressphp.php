<?php

$apikey = '867a97b1f80a43d0801c2145e48a3232';
if(isset($_GET['param']))
   {
    
     if($_GET['param']=='legis')
    {
        header('Content-Type: application/json');
        $url='http://congress.api.sunlightfoundation.com/legislators?apikey=867a97b1f80a43d0801c2145e48a3232&per_page=all';
        $legjson=file_get_contents($url,false);
        echo $legjson;
    }
     if($_GET['param']=='bin')
    {
        header('Content-Type: application/json');
        $url='https://congress.api.sunlightfoundation.com/bills?apikey=867a97b1f80a43d0801c2145e48a3232&per_page=50&history.active=false&last_version.urls.pdf__exists=true&order=introduced_on"';
        $bjson=file_get_contents($url,false);
        echo $bjson;
    }
     if($_GET['param']=='bia')
    {
        header('Content-Type: application/json');
        $url='https://congress.api.sunlightfoundation.com/bills?apikey=867a97b1f80a43d0801c2145e48a3232&per_page=50&history.active=true&last_version.urls.pdf__exists=true&order=introduced_on"';
        $bjson=file_get_contents($url,false);
        echo $bjson;
    }
    
     if($_GET['param']=='com')
    {
        header('Content-Type: application/json');
        $url='https://congress.api.sunlightfoundation.com/committees?apikey=867a97b1f80a43d0801c2145e48a3232&per_page=all';
        $com5json=file_get_contents($url,false);
        echo $com5json;
    }  
    
    if($_GET['param']=='top5b')
    {
        
        $url='https://congress.api.sunlightfoundation.com/bills?apikey=867a97b1f80a43d0801c2145e48a3232&per_page=5&sponsor_id='.$_GET['sponsorid'];
        $bill5json=file_get_contents($url,false);
        echo $bill5json;
    }

     if($_GET['param']=='top5c')
    {
        
         $url='https://congress.api.sunlightfoundation.com/committees?&apikey=867a97b1f80a43d0801c2145e48a3232&per_page=5&member_ids='.$_GET['memid'];
         $com5json=file_get_contents($url,false);
         echo $com5json;
    }

}
    
    ?>