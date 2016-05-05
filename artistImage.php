<?php
  function getImageUrl($artistName){
    $xmlString = file_get_contents("http://marcatoweb.com/xml/artists_23241.xml");
    $xml = new SimpleXMLElement($xmlString);
    foreach($xml->artist as $artist)
    {
      $thisArtist = (string)$artist->name;
      if(trim($thisArtist) == trim($artistName)){
        foreach($artist->websites->website as $website)
        {
          if($website->name == "image"){
            return (string)$website->url;
          }
        }
      }
    }
  }

  function getArtistImage($artist) {
    $url = getImageUrl($artist);
    $ch = curl_init(); 
    $timeout = 0; 
    curl_setopt ($ch, CURLOPT_URL, $url); 
    curl_setopt ($ch, CURLOPT_CONNECTTIMEOUT, $timeout); 

    // Getting binary data 
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1); 
    curl_setopt($ch, CURLOPT_BINARYTRANSFER, 1); 

    $image = curl_exec($ch); 
    curl_close($ch); 

    $im = @imagecreatefromstring($image); 
    return $im;
  }

  if (isset($_GET['artist'])) {
      $artist = str_replace("%20"," ",$_GET['artist']);
      $image = getArtistImage($artist);
      header("Content-Type: image/jpg");
      imagejpeg($image,NULL,100);
  }
?>