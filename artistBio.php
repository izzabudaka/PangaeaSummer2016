<?php
  function getArtistBio($artistName){
    $xmlString = file_get_contents("http://marcatoweb.com/xml/artists_23491.xml");
    $xml = new SimpleXMLElement($xmlString);
    foreach($xml->artist as $artist)
    {
      $thisArtist = (string)$artist->name;
      if(trim($thisArtist) == trim($artistName)){
        return (string)$artist->bio_public;
      }
    }
  }

  if (isset($_GET['artist'])) {
      $artist = str_replace("%20"," ",$_GET['artist']);
      $bio = getArtistBio($artist);
      echo $bio;
  }
?>