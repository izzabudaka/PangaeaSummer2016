<?php
  $xmlString = file_get_contents("http://marcatoweb.com/xml/artists_23491.xml");
  $xml = new SimpleXMLElement($xmlString);
  $artists = array();
  foreach($xml->artist as $artistXml)
  {
    $categories = implode( ' ', (array)$artistXml->categories->category);
    if (strpos($categories, 'Student') !== false || strpos($categories, 'Room Hosting') !== false) {
      $artists[(string)$artistXml->name] =(string)$artistXml->bio_public;
    }
  }
  echo json_encode($artists);
?>