<?php
  $xmlString = file_get_contents("http://marcatoweb.com/xml/artists_23241.xml");
  $xml = new SimpleXMLElement($xmlString);
  $artists = array();
  foreach($xml->artist as $artistXml)
  {
    $artists[(string)$artistXml->name] =(string)$artistXml->bio_public;
  }
  echo json_encode($artists);
?>