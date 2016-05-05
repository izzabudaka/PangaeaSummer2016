<?php
  $xmlString = file_get_contents("http://marcatoweb.com/xml/artists_23491.xml");
  $xml = new SimpleXMLElement($xmlString);
  $artists = array();
  foreach($xml->artist as $artist)
  {
    $artists[] = (string)$artist->website;
  }
  echo json_encode($artists);
?>