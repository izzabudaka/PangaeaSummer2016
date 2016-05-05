<?php
  function endsWith($haystack, $needle) {
      // search forward starting from end minus needle length characters
      return $needle === "" || (($temp = strlen($haystack) - strlen($needle)) >= 0 && strpos($haystack, $needle, $temp) !== false);
  }
  function getImageUrl($artistName){
    $xmlString = file_get_contents("http://marcatoweb.com/xml/artists_23491.xml");
    $xml = new SimpleXMLElement($xmlString);
    foreach($xml->artist as $artist)
    {
      $thisArtist = (string)$artist->name;
      if(trim($thisArtist) == trim($artistName)){
        return (string)$artist->web_photo_url;
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
    header("Content-Type: image/jpg");
    imagejpeg($im,NULL,100);
  }

  if (isset($_GET['artist'])) {
      $artist = str_replace("%20"," ",$_GET['artist']);
      getArtistImage($artist);
  }
?>