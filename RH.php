
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="style.css">

    <title>Configurateur Porte de garage Séctionnelle à Rainures Horizontales</title>
</head>
<body>
<div class="container">
    <div class="row">
        <div class="col-lg-6">
            <div class="sticky-content text-center info-color text-white" id="responsive" style="position: fixed; width:380px;">
                <div id="carouselExampleIndicators" class="carousel slide my-4" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner" role="listbox">
                        <div class="carousel-item active">
                            <img class="d-block img-fluid" src="img/rainures.png" id="divClr" alt="First slide">
                        </div>
                        <div class="carousel-item">
                            <img class="d-block img-fluid" src="img/rainures%202.png" id="divClr1"   alt="Second slide">
                        </div>
                        <div class="carousel-item">
                            <img class="d-block img-fluid" src="img/rainures%203.png"  id="divClr2" alt="Third slide">
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>

                <div class="row">
                    <div class="col-4">
                        <a href="#"><img class="card-img-top" id="divClr3" src="img/rainurepetitformat.png"  data-toggle="modal" data-target="#image1"  alt=""></a>

                    </div>

                    <div class="col-4">
                        <a href="#"><img class="card-img-top" id="divClr4" src="img/rainurepetitformat%202.png"   data-toggle="modal" data-target="#image2"  alt=""></a>

                    </div>


                    <div class="col-4">
                        <a href="#"><img class="card-img-top"  id="divClr5" src="img/rainurepetitformat3.png"   data-toggle="modal" data-target="#image3"  alt=""></a>

                    </div>

                    <div class="card-text" style="padding-left:12%;width: 20em;" id="price">
                        <h6 style="color: green;text-transform: uppercase;font-weight: bold;font-size: 20px;text-align: center;">Votre Prix En TTC</h6>
                        <div class="d-flex" >
                            <div id="tab" style="font-weight: bold;color: black;font-size: 25px;border:2px black solid ;width:20.8em;text-align: center;" onchange="tab();prixinitiale()">1112.4 €
                            </div>
                            <div id="tab2" style="font-weight: bold;color: black;font-size: 25px;border:2px black solid ;width:20.8em;text-align: center;display: none;" onchange="tabRal();prixinitiale()"></div>

                        </div>
                        <div type="button" class="btn btn-secondary" onclick="resume()"; data-toggle="modal" data-target="#centralModalSuccess">Resume </div>

                    </div>
    <br>


    <div id="texte">
                        <P style="color:black">Réalisées sur mesure, nos portes de garage en acier galvanisé s’adaptent  à votre encadrement. Personnalisables,vous pouvez choisir entre une multitude
                            de modèles, du design au plus classique.
                            Nous avons forcément le modèle dont
                            vous avez besoin.
                        <span class="d-flex" style="margin-left:20%;">
                       <img src="img/garantie10ans.png"/>
                        <img src="img/directusine.png"/>
                        <img src="img/sur%20mesure.png"/>
                        </P>

</span>
    </div>


                </div>
                <!---------------------------------------------------calcul prix--------------------------------------------------------------------------------------------------------------------------------------------->

            </div>
        </div>


        <div class="col-6">
            <div class="example-content">
                    <div class="col-6"  style="background : rgba(255,255,255,0.70);">
                        <a href="http://nao-commande.fr/configurateur/PDG2/"> <img src="img/logo1.png" class="img-fluid" style="width:75px;height:75px;"></a>
                    </div>
                        <div class="col-8" style="font-weight: bold;font-size: 15px;text-align: center;" id="entete">
                            CONFIGURATEUR PORTE DE GARAGE SECTIONNELLE À RAINURES HORIZONTALES  <br>
                            <p style="color:green;font-weight: bold;text-transform: uppercase;"> Suivez Nous </p>
                            <a href="https://www.facebook.com/naofermetures/" class="fa fa-facebook" style="width:50px;color:green;"></a>
                            <a href="https://twitter.com/NAOFermetures" class="fa fa-twitter" style="width:50px;color: green;"></a>
                            <a href="https://www.instagram.com/naofermetures/?hl=fr" class="fa fa-instagram" style="width:50px;color: green;"></a>
                        </div>

                                <!-------------------------------------------------------------Quantité -------------------------------------------------------------------------- -->
                                <div id="content">
                                    <div class="form-group">
                                        <strong>Quantité</strong>
                                        <input type="number" class="form-control" id="qteId" name="quantite" value=""  min="1" max="100" style="width: 25%;border-radius: 10px;"  required onchange="tab();quantite();">
                                        <div id="warning" style="color: #ff0504;font-size: 12px;font-weight: bold"></div>
                                    </div>
                                    <!------------------------------------------------Dimension----------------------------------------------------------------------------------------------------->
                                    <div class="col-8" style="width: 23rem;height: 15rem;margin-bottom: 10%;text-align: center;margin-left:20%;" >
                                        <img src="img/schéma.jpg"  class="img-fluid" id="schema">
                                    </div>

                             <!-------   ---- -----<div  id="nao" class="card-text" style="padding-left:12%;width: 20em;"  >
                                        <h6 style="color: green;text-transform: uppercase;font-weight: bold;font-size: 20px;text-align: center;">Votre Prix En TTC</h6>
                                        <div class="d-flex" >
                                            <div id="calcul" style="font-weight: bold;color: black;font-size: 25px;border:2px black solid ;width:20.8em;text-align: center;display: none" onchange="tab();prixinitiale()">1112.4 €
                                            </div>
                                            <div id="calcul2" style="font-weight: bold;color: black;font-size: 25px;border:2px black solid ;width:20.8em;text-align: center;display: none;" onchange="tabRal();prixinitiale()"></div>

                                        </div>
                                        <div style="padding-left:35%;">
                                            <div type="button" class="btn btn-secondary" onclick="resume()"; data-toggle="modal" data-target="#centralModalSuccess">Resume </div>
                                        </div>
                                    </div>----->
                                    <strong> <h6 data-toggle="tooltip" data-placement="top" title="RENSEIGNEZ VOS DIMENSIONS">
                                            Dimensions (en mm) :
                                    </strong>  </h6>

                                    <div>

                                        <table>

                                            <tr>
                                                <td width="25%" style="font-weight: bold;color: black;"  class="" ><small>(1)</small>Largeur tableau </td>

                                                <td class="form-group"><input type="number"  class="form-control" id="largeurId"   data-toggle="tooltip" data-placement="top" title="largeur d'ouverture entre 1900 et 6000" step="10" min="1900" max="6000"  REQUIREDD onchange="Vlargeur();quantite();tab()"  >
                                                    <div id="warn" style="color: #ff0504;font-size: 12px;font-weight: bold;"></div>
                                                    <div id="warn1" style="color: #ff0504;font-size: 12px;font-weight: bold;"></div>
                                                </td>

                                                <td  width="25%" style="font-weight: bold;color: black;"   required="true" ><small>(2)</small>hauteur tableau</td>
                                                <td class="form-group"><input type="number" class="form-control"  id="hauteurId" data-toggle="tooltip" data-placement="top" title="hauteur d'ouverture entre 1900 et 4500" step="10" min="1900" max="4500"  REQUIRED   onchange="Vlargeur();tab() " >
                                                    <div id="warn2" style="color: #ff0504;font-size: 12px;font-weight: bold;"></div></td>

                                            </tr>

                                            <tr>
                                                <td  width="25%" style="font-weight: bold;color: black;"   class="" ><small>(3)</small>linteau</td>
                                                <td class="form-group"><input type="number" id="linteauId" class="form-control" data-toggle="tooltip" data-placement="top" title="Retour jusqu'au plafond"  placeholder="170" min="1" required></td>
                                                <td  width="25%" style="font-weight: bold;color: black;"   class="text-muted" ><small>(4)</small>ecg</td>
                                                <td class="form-group"><input type="number"class="form-control"  id="ecgId"  data-toggle="tooltip" data-placement="top"   title="Retour jusqu'au mur de gauche"placeholder="75" required></td>
                                            </tr>
                                            <div class="warning" style="color: #ff0504;font-size: 12px;font-weight: bold;"></div>
                                            <tr>
                                                <td width="25%" style="font-weight: bold;color: black;"   class=""><small>(5)</small>ecd</td>
                                                <td class="form-group"><input type="number" id="ecdId" class="form-control" data-toggle="tooltip" data-placement="top"  title="Retour jusqu'au mur de droite"  placeholder="75"  min="1" required></td>
                                                <td  width="25%" style="font-weight: bold;color: black;"   class=""><small>(6)</small>refoulement</td>
                                                <td class="form-group"><input type="number" class="form-control"   id="refoulement" data-toggle="tooltip" data-placement="top"   title="Hauteur disponible pour dégagement" placeholder="" min="1" required onchange="refoulement();">
                                                    <div id="ref" style="color: #ff0504;font-size: 12px;font-weight: bold"></div>
                                                </td>
                                            </tr>


                                        </table>

                                    </div>

                                    </br>


                                    <!---------------------------------------------Mesure votre Porte----------------------------------------------------------------------------->
                                    <div style="padding-left: 20%;">
                                        <a href="#"  class="btn btn-secondary" data-toggle="modal" data-target="#dimension">Comment mesurer sa porte de garage ?</a>
                                    </div>


                                                    <!------------------------------------------------------- Modèles-------------------------------------------------------------------------- -->



                                    <!-------------------------------------------------------Couleur -------------------------------------------------------------------------- -->


                                    <h5 class="mb-0" STYLE="color:black;" data-toggle="tooltip" data-placement="top" title="CHOISSISEZ VOTRE COULEUR">
                                        Couleur:
                                    </h5>

                                    <div class="col-md-9" >
                                        <div  class="color" id="couleurId" name="couleur">
                                            <div class="d-flex">
                                                <div class="form-check" >
                                                    <input  type="radio"  id="couleur1"  class="form-check-input" name="couleur" value="blanc" CHECKED ONCLICK="changeCouleur();">
                                                    <label for="couleur1"><img src="img/blanc.jpg"  class="img-fluid" /> </label>
                                                </div>
                                                <div class="form-check"  >
                                                    <input  type="radio"  id="couleur2"   class="form-check-input" name="couleur" value="gris"  ONCLICK="changeCouleur();">
                                                    <label for="couleur2">  <img src="img/grisA.jpg"  class="img-fluid"/></label>
                                                </div>
                                                <div class="form-check"  >

                                                    <input  type="radio"id="couleur3" class="form-check-input" name="couleur" value="grisAlu" ONCLICK="changeCouleur();" >
                                                    <label for="couleur3">  <img src="img/gris.jpg" class="img-fluid" /></label>
                                                </div>
                                                <div class="form-check" >

                                                    <input  type="radio"   id="couleur4"  class="form-check-input" name="couleur" value="vert" ONCLICK="changeCouleur();">
                                                    <label for="couleur4"><img src="img/vert.jpg"  class="img-fluid" /></label>
                                                </div>
                                            </div>
                                            <div class="d-flex">
                                                <div class="form-check" >

                                                    <input  type="radio" id="couleur5" class="form-check-input" name="couleur" value="brun" ONCLICK="changeCouleur();">
                                                    <label for="couleur5"> <img src="img/maron.jpg"  class="img-fluid" /></label>
                                                </div>
                                                <div class="form-check" >
                                                    <input  type="radio"  id="couleur6" class="form-check-input" name="couleur" value="bleu" ONCLICK="changeCouleur();" >
                                                    <label for="couleur6"> <img src="img/bleu.jpg" class="img-fluid"/></label>
                                                </div>
                                                <div class="form-check" >

                                                    <input  type="radio" id="couleur7" class="form-check-input" name="couleur" value="rouge" ONCLICK="changeCouleur();">
                                                    <label for="couleur7">  <img src="img/rouge.jpg" class="img-fluid" /></label>
                                                </div>
                                                <div class="form-check" >
                                                    <input  type="radio"  id="couleur8" class="form-check-input" name="couleur" value="ivoire" ONCLICK="changeCouleur();">
                                                    <label for="couleur8">  <img src="img/jaune.jpg" class="img-fluid" /></label>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="mt-2 mb-5">
                                            <div class="btn btn-secondary" onclick="ral();" >Renseignez Une Ral Spécifique</div>
                                            <br>
                                            <div id="divral">
                                                <div id="ral"   id="autreralId" name="autreralId " onchange="couleurral();tabRal();prixinitiale()"></div>
                                                <select id="coul"  class="colorer" onchange="prixinitiale();couleurral();tabRal();">
                                                    <option value="" >Sélectionnez Votre Couleur</option>
                                                    <option value="Ral 1000 - Beige vert" id="ral_1000" style="background-color:#ccc188;">
                                                        Ral 1000 - Beige vert										</option>
                                                    <option value="Ral 1001 - Beige" id="ral_1001" style="background-color:#ceb487;">
                                                        Ral 1001 - Beige										</option>
                                                    <option value="Ral 1002 - Jaune sable" id="ral_1002" style="background-color:#d0b173;">
                                                        Ral 1002 - Jaune sable										</option>
                                                    <option value="Ral 1003 - Jaune de sécurité" id="ral_1003" style="background-color:#f2ad00;">
                                                        Ral 1003 - Jaune de sécurité										</option>
                                                    <option value="Ral 1004 - Jaune or" id="ral_1004" style="background-color:#e4a700;">
                                                        Ral 1004 - Jaune or										</option>
                                                    <option value="Ral 1005 - Jaune miel" id="ral_1005" style="background-color:#c79600;">
                                                        Ral 1005 - Jaune miel										</option>
                                                    <option value="Ral 1006 - Jaune maïs" id="ral_1006" style="background-color:#d99300;">
                                                        Ral 1006 - Jaune maïs										</option>
                                                    <option value="Ral 1007 - Jaune narcisse" id="ral_1007" style="background-color:#e69400;">
                                                        Ral 1007 - Jaune narcisse										</option>
                                                    <option value="Ral 1011 - Beige brun" id="ral_1011" style="background-color:#af8552;">
                                                        Ral 1011 - Beige brun										</option>
                                                    <option value="Ral 1012 - Jaune citron" id="ral_1012" style="background-color:#d8ba2e;">
                                                        Ral 1012 - Jaune citron										</option>
                                                    <option value="Ral 1013 - Blanc perlé" id="ral_1013" style="background-color:#e5dfcc;">
                                                        Ral 1013 - Blanc perlé										</option>
                                                    <option value="Ral 1014 - Ivoire" id="ral_1014" style="background-color:#dfcea1;">
                                                        Ral 1014 - Ivoire										</option>
                                                    <option value="Ral 1015 - Ivoire clair" id="ral_1015" style="background-color:#e6d9bd;">
                                                        Ral 1015 - Ivoire clair										</option>
                                                    <option value="Ral 1016 - Jaune soufre" id="ral_1016" style="background-color:#ecea41;">
                                                        Ral 1016 - Jaune soufre										</option>
                                                    <option value="Ral 1017 - Jaune safran" id="ral_1017" style="background-color:#f6b256;">
                                                        Ral 1017 - Jaune safran										</option>
                                                    <option value="Ral 1018 - Jaune zinc" id="ral_1018" style="background-color:#fdda38;">
                                                        Ral 1018 - Jaune zinc										</option>
                                                    <option value="Ral 1019 - Beige gris" id="ral_1019" style="background-color:#a6937b;">
                                                        Ral 1019 - Beige gris										</option>
                                                    <option value="Ral 1020 - Jaune olive" id="ral_1020" style="background-color:#a09465;">
                                                        Ral 1020 - Jaune olive										</option>
                                                    <option value="Ral 1021 - Jaune colza" id="ral_1021" style="background-color:#f2c000;">
                                                        Ral 1021 - Jaune colza										</option>
                                                    <option value="Ral 1023 - Jaune trafic" id="ral_1023" style="background-color:#f2bf00;">
                                                        Ral 1023 - Jaune trafic										</option>
                                                    <option value="Ral 1024 - Jaune ocre" id="ral_1024" style="background-color:#b89650;">
                                                        Ral 1024 - Jaune ocre										</option>
                                                    <option value="Ral 1027 - Jaune curry" id="ral_1027" style="background-color:#a4861a;">
                                                        Ral 1027 - Jaune curry										</option>
                                                    <option value="Ral 1028 - Jaune melon" id="ral_1028" style="background-color:#ffa600;">
                                                        Ral 1028 - Jaune melon										</option>
                                                    <option value="Ral 1032 - Jaune genêt" id="ral_1032" style="background-color:#e2ac00;">
                                                        Ral 1032 - Jaune genêt										</option>
                                                    <option value="Ral 1033 - Jaune dahlia" id="ral_1033" style="background-color:#f7a11f;">
                                                        Ral 1033 - Jaune dahlia										</option>
                                                    <option value="Ral 1034 - Jaune pastel" id="ral_1034" style="background-color:#eba557;">
                                                        Ral 1034 - Jaune pastel										</option>
                                                    <option value="Ral 2000 - Orangé jaune" id="ral_2000" style="background-color:#d97604;">
                                                        Ral 2000 - Orangé jaune										</option>
                                                    <option value="Ral 2001 - Orangé rouge" id="ral_2001" style="background-color:#bb4926;">
                                                        Ral 2001 - Orangé rouge										</option>
                                                    <option value="Ral 2002 - Orangé sang" id="ral_2002" style="background-color:#c13524;">
                                                        Ral 2002 - Orangé sang										</option>
                                                    <option value="Ral 2003 - Orangé pastel" id="ral_2003" style="background-color:#f97a31;">
                                                        Ral 2003 - Orangé pastel										</option>
                                                    <option value="Ral 2004 - Orangé pur" id="ral_2004" style="background-color:#e8540d;">
                                                        Ral 2004 - Orangé pur										</option>
                                                    <option value="Ral 2008 - Orangé rouge clair" id="ral_2008" style="background-color:#f46f29;">
                                                        Ral 2008 - Orangé rouge clair										</option>
                                                    <option value="Ral 2009 - Orangé trafic" id="ral_2009" style="background-color:#db5316;">
                                                        Ral 2009 - Orangé trafic										</option>
                                                    <option value="Ral 2010 - Orangé de sécurité" id="ral_2010" style="background-color:#d55d23;">
                                                        Ral 2010 - Orangé de sécurité										</option>
                                                    <option value="Ral 2011 - Orangé foncé" id="ral_2011" style="background-color:#ea7625;">
                                                        Ral 2011 - Orangé foncé										</option>
                                                    <option value="Ral 2012 - Orangé saumon" id="ral_2012" style="background-color:#d6654e;">
                                                        Ral 2012 - Orangé saumon										</option>
                                                    <option value="Ral 2100 - Noir profond" id="ral_2100" style="background-color:#151619;">
                                                        Ral 2100 - Noir profond										</option>
                                                    <option value="Ral 3000 - Rouge feu" id="ral_3000" style="background-color:#a02725;">
                                                        Ral 3000 - Rouge feu										</option>
                                                    <option value="Ral 3001 - Rouge de sécurité" id="ral_3001" style="background-color:#a0001c;">
                                                        Ral 3001 - Rouge de sécurité										</option>
                                                    <option value="Ral 3002 - Rouge carmin" id="ral_3002" style="background-color:#991424;">
                                                        Ral 3002 - Rouge carmin										</option>
                                                    <option value="Ral 3003 - Rouge rubis" id="ral_3003" style="background-color:#870a24;">
                                                        Ral 3003 - Rouge rubis										</option>
                                                    <option value="Ral 3004 - Rouge pourpre" id="ral_3004" style="background-color:#6c1b2a;">
                                                        Ral 3004 - Rouge pourpre										</option>
                                                    <option value="Ral 3005 - Rouge vin" id="ral_3005" style="background-color:#581e29;">
                                                        Ral 3005 - Rouge vin										</option>
                                                    <option value="Ral 3007 - Rouge noir" id="ral_3007" style="background-color:#402226;">
                                                        Ral 3007 - Rouge noir										</option>
                                                    <option value="Ral 3009 - Rouge oxyde" id="ral_3009" style="background-color:#6d312b;">
                                                        Ral 3009 - Rouge oxyde										</option>
                                                    <option value="Ral 3011 - Rouge brun" id="ral_3011" style="background-color:#791f24;">
                                                        Ral 3011 - Rouge brun										</option>
                                                    <option value="Ral 3012 - Rouge beige" id="ral_3012" style="background-color:#c68873;">
                                                        Ral 3012 - Rouge beige										</option>
                                                    <option value="Ral 3013 - Rouge tomate" id="ral_3013" style="background-color:#992a28;">
                                                        Ral 3013 - Rouge tomate										</option>
                                                    <option value="Ral 3014 - Vieux rose" id="ral_3014" style="background-color:#cf7278;">
                                                        Ral 3014 - Vieux rose										</option>
                                                    <option value="Ral 3015 - Rose clair" id="ral_3015" style="background-color:#e3a0ac;">
                                                        Ral 3015 - Rose clair										</option>
                                                    <option value="Ral 3016 - Rouge corail" id="ral_3016" style="background-color:#ab392d;">
                                                        Ral 3016 - Rouge corail										</option>
                                                    <option value="Ral 3017 - Rosé" id="ral_3017" style="background-color:#cc515e;">
                                                        Ral 3017 - Rosé										</option>
                                                    <option value="Ral 3018 - Rouge fraise" id="ral_3018" style="background-color:#ca3f51;">
                                                        Ral 3018 - Rouge fraise										</option>
                                                    <option value="Ral 3020 - Rouge trafic" id="ral_3020" style="background-color:#bf111b;">
                                                        Ral 3020 - Rouge trafic										</option>
                                                    <option value="Ral 3022 - Rouge saumon" id="ral_3022" style="background-color:#d36b56;">
                                                        Ral 3022 - Rouge saumon										</option>
                                                    <option value="Ral 3027 - Rouge framboise" id="ral_3027" style="background-color:#b01d42;">
                                                        Ral 3027 - Rouge framboise										</option>
                                                    <option value="Ral 3031 - Rouge oriental" id="ral_3031" style="background-color:#a7323e;">
                                                        Ral 3031 - Rouge oriental										</option>
                                                    <option value="Ral 4001 - Lilas rouge" id="ral_4001" style="background-color:#865d86;">
                                                        Ral 4001 - Lilas rouge										</option>
                                                    <option value="Ral 4002 - Violet rouge" id="ral_4002" style="background-color:#8f3f51;">
                                                        Ral 4002 - Violet rouge										</option>
                                                    <option value="Ral 4003 - Violet bruyère" id="ral_4003" style="background-color:#ca5b91;">
                                                        Ral 4003 - Violet bruyère										</option>
                                                    <option value="Ral 4004 - Violet bordeaux" id="ral_4004" style="background-color:#69193b;">
                                                        Ral 4004 - Violet bordeaux										</option>
                                                    <option value="Ral 4005 - Lilas bleu" id="ral_4005" style="background-color:#7e63a1;">
                                                        Ral 4005 - Lilas bleu										</option>
                                                    <option value="Ral 4006 - Pourpre trafic" id="ral_4006" style="background-color:#912d76;">
                                                        Ral 4006 - Pourpre trafic										</option>
                                                    <option value="Ral 4007 - Violet pourpre" id="ral_4007" style="background-color:#48233e;">
                                                        Ral 4007 - Violet pourpre										</option>
                                                    <option value="Ral 4008 - Violet de sécurité" id="ral_4008" style="background-color:#853d7d;">
                                                        Ral 4008 - Violet de sécurité										</option>
                                                    <option value="Ral 4009 - Violet pastel" id="ral_4009" style="background-color:#9d8493;">
                                                        Ral 4009 - Violet pastel										</option>
                                                    <option value="Ral 5000 - Bleu violet" id="ral_5000" style="background-color:#2f4a71;">
                                                        Ral 5000 - Bleu violet										</option>
                                                    <option value="Ral 5001 - Bleu vert" id="ral_5001" style="background-color:#0e4666;">
                                                        Ral 5001 - Bleu vert										</option>
                                                    <option value="Ral 5002 - Bleu outremer" id="ral_5002" style="background-color:#162e7b;">
                                                        Ral 5002 - Bleu outremer										</option>
                                                    <option value="Ral 5003 - Bleu saphir" id="ral_5003" style="background-color:#193058;">
                                                        Ral 5003 - Bleu saphir										</option>
                                                    <option value="Ral 5004 - Bleu noir" id="ral_5004" style="background-color:#1a1d2a;">
                                                        Ral 5004 - Bleu noir										</option>
                                                    <option value="Ral 5005 - Bleu de sécurité" id="ral_5005" style="background-color:#004389;">
                                                        Ral 5005 - Bleu de sécurité										</option>
                                                    <option value="Ral 5007 - Bleu brillant" id="ral_5007" style="background-color:#38618c;">
                                                        Ral 5007 - Bleu brillant										</option>
                                                    <option value="Ral 5008 - Bleu gris" id="ral_5008" style="background-color:#2d3944;">
                                                        Ral 5008 - Bleu gris										</option>
                                                    <option value="Ral 5009 - Bleu azur" id="ral_5009" style="background-color:#245878;">
                                                        Ral 5009 - Bleu azur										</option>
                                                    <option value="Ral 5010 - Bleu gentiane" id="ral_5010" style="background-color:#00427f;">
                                                        Ral 5010 - Bleu gentiane										</option>
                                                    <option value="Ral 5011 - Bleu acier" id="ral_5011" style="background-color:#1a2740;">
                                                        Ral 5011 - Bleu acier										</option>
                                                    <option value="Ral 5012 - Bleu clair" id="ral_5012" style="background-color:#2781bb;">
                                                        Ral 5012 - Bleu clair										</option>
                                                    <option value="Ral 5013 - Bleu cobalt" id="ral_5013" style="background-color:#202e53;">
                                                        Ral 5013 - Bleu cobalt										</option>
                                                    <option value="Ral 5014 - Bleu pigeon" id="ral_5014" style="background-color:#667b9a;">
                                                        Ral 5014 - Bleu pigeon										</option>
                                                    <option value="Ral 5015 - Bleu ciel" id="ral_5015" style="background-color:#0071b5;">
                                                        Ral 5015 - Bleu ciel										</option>
                                                    <option value="Ral 5017 - Ral 5017" id="ral_5017" style="background-color:#004c91;">
                                                        Ral 5017 - Ral 5017										</option>
                                                    <option value="Ral 5018 - Bleu turquoise" id="ral_5018" style="background-color:#138992;">
                                                        Ral 5018 - Bleu turquoise										</option>
                                                    <option value="Ral 5019 - Bleu capri" id="ral_5019" style="background-color:#005688;">
                                                        Ral 5019 - Bleu capri										</option>
                                                    <option value="Ral 5020 - Bleu océan" id="ral_5020" style="background-color:#00747d;">
                                                        Ral 5020 - Bleu océan										</option>
                                                    <option value="Ral 5021 - Bleu eau" id="ral_5021" style="background-color:#00747d;">
                                                        Ral 5021 - Bleu d'eau										</option>
                                                    <option value="Ral 5022 - Bleu nocturne" id="ral_5022" style="background-color:#28275a;">
                                                        Ral 5022 - Bleu nocturne										</option>
                                                    <option value="Ral 5023 - Bleu distant" id="ral_5023" style="background-color:#486591;">
                                                        Ral 5023 - Bleu distant										</option>
                                                    <option value="Ral 5024 - Bleu pastel" id="ral_5024" style="background-color:#6391b0;">
                                                        Ral 5024 - Bleu pastel										</option>
                                                    <option value="Ral 6000 - Vert platine" id="ral_6000" style="background-color:#327663;">
                                                        Ral 6000 - Vert platine										</option>
                                                    <option value="Ral 6001 - Vert émeraude" id="ral_6001" style="background-color:#266d3b;">
                                                        Ral 6001 - Vert émeraude										</option>
                                                    <option value="Ral 6002 - Vert feuillage" id="ral_6002" style="background-color:#276230;">
                                                        Ral 6002 - Vert feuillage										</option>
                                                    <option value="Ral 6003 - Vert olive" id="ral_6003" style="background-color:#4e553d;">
                                                        Ral 6003 - Vert olive										</option>
                                                    <option value="Ral 6004 - Vert bleu" id="ral_6004" style="background-color:#004547;">
                                                        Ral 6004 - Vert bleu										</option>
                                                    <option value="Ral 6005 - Vert mousse" id="ral_6005" style="background-color:#0e4438;">
                                                        Ral 6005 - Vert mousse										</option>
                                                    <option value="Ral 6006 - Olive gris" id="ral_6006" style="background-color:#3b3d33;">
                                                        Ral 6006 - Olive gris										</option>
                                                    <option value="Ral 6007 - Vert bouteille" id="ral_6007" style="background-color:#2b3626;">
                                                        Ral 6007 - Vert bouteille										</option>
                                                    <option value="Ral 6008 - Vert brun" id="ral_6008" style="background-color:#302f22;">
                                                        Ral 6008 - Vert brun										</option>
                                                    <option value="Ral 6009 - Vert sapin" id="ral_6009" style="background-color:#213529;">
                                                        Ral 6009 - Vert sapin										</option>
                                                    <option value="Ral 6010 - Vert herbe" id="ral_6010" style="background-color:#426e38;">
                                                        Ral 6010 - Vert herbe										</option>
                                                    <option value="Ral 6011 - Vert réséda" id="ral_6011" style="background-color:#68825f;">
                                                        Ral 6011 - Vert réséda										</option>
                                                    <option value="Ral 6012 - Vert noir" id="ral_6012" style="background-color:#293a37;">
                                                        Ral 6012 - Vert noir										</option>
                                                    <option value="Ral 6013 - Vert jonc" id="ral_6013" style="background-color:#76785b;">
                                                        Ral 6013 - Vert jonc										</option>
                                                    <option value="Ral 6014 - Olive jaune" id="ral_6014" style="background-color:#443f31;">
                                                        Ral 6014 - Olive jaune										</option>
                                                    <option value="Ral 6015 - Olive noir" id="ral_6015" style="background-color:#383b34;">
                                                        Ral 6015 - Olive noir										</option>
                                                    <option value="Ral 6016 - Vert turquoise" id="ral_6016" style="background-color:#00664f;">
                                                        Ral 6016 - Vert turquoise										</option>
                                                    <option value="Ral 6017 - Vert mai" id="ral_6017" style="background-color:#4d8542;">
                                                        Ral 6017 - Vert mai										</option>
                                                    <option value="Ral 6018 - Vert jaune" id="ral_6018" style="background-color:#4b9b3e;">
                                                        Ral 6018 - Vert jaune										</option>
                                                    <option value="Ral 6019 - Vert blanc" id="ral_6019" style="background-color:#b2d8b4;">
                                                        Ral 6019 - Vert blanc										</option>
                                                    <option value="Ral 6020 - Oxyde chromique" id="ral_6020" style="background-color:#394937;">
                                                        Ral 6020 - Oxyde chromique										</option>
                                                    <option value="Ral 6021 - Vert pâle" id="ral_6021" style="background-color:#87a180;">
                                                        Ral 6021 - Vert pâle										</option>
                                                    <option value="Ral 6022 - Olive brun" id="ral_6022" style="background-color:#3c372a;">
                                                        Ral 6022 - Olive brun										</option>
                                                    <option value="Ral 6024 - Vert trafic" id="ral_6024" style="background-color:#008455;">
                                                        Ral 6024 - Vert trafic										</option>
                                                    <option value="Ral 6025 - Vert fougère" id="ral_6025" style="background-color:#56723d;">
                                                        Ral 6025 - Vert fougère										</option>
                                                    <option value="Ral 6026 - Vert opale" id="ral_6026" style="background-color:#005c54;">
                                                        Ral 6026 - Vert opale										</option>
                                                    <option value="Ral 6027 - Vert clair" id="ral_6027" style="background-color:#77bbbd;">
                                                        Ral 6027 - Vert clair										</option>
                                                    <option value="Ral 6028 - Vert pin" id="ral_6028" style="background-color:#2e554b;">
                                                        Ral 6028 - Vert pin										</option>
                                                    <option value="Ral 6029 - Vert menthe" id="ral_6029" style="background-color:#006f43;">
                                                        Ral 6029 - Vert menthe										</option>
                                                    <option value="Ral 6032 - Vert de sécurité" id="ral_6032" style="background-color:#00855a;">
                                                        Ral 6032 - Vert de sécurité										</option>
                                                    <option value="Ral 6033 - Turquoise menthe" id="ral_6033" style="background-color:#3f8884;">
                                                        Ral 6033 - Turquoise menthe										</option>
                                                    <option value="Ral 6034 - Turquoise pastel" id="ral_6034" style="background-color:#75adb1;">
                                                        Ral 6034 - Turquoise pastel										</option>
                                                    <option value="Ral 7000 - Gris petit-gris" id="ral_7000" style="background-color:#798790;">
                                                        Ral 7000 - Gris petit-gris										</option>
                                                    <option value="Ral 7001 - Gris argent" id="ral_7001" style="background-color:#8c969f;">
                                                        Ral 7001 - Gris argent										</option>
                                                    <option value="Ral 7002 - Gris olive" id="ral_7002" style="background-color:#827d67;">
                                                        Ral 7002 - Gris olive										</option>
                                                    <option value="Ral 7003 - Gris mousse" id="ral_7003" style="background-color:#79796c;">
                                                        Ral 7003 - Gris mousse										</option>
                                                    <option value="Ral 7004 - Gris de sécurité" id="ral_7004" style="background-color:#999a9f;">
                                                        Ral 7004 - Gris de sécurité										</option>
                                                    <option value="Ral 7005 - Gris souris" id="ral_7005" style="background-color:#6d7270;">
                                                        Ral 7005 - Gris souris										</option>
                                                    <option value="Ral 7006 - Gris beige" id="ral_7006" style="background-color:#766a5d;">
                                                        Ral 7006 - Gris beige										</option>
                                                    <option value="Ral 7008 - Gris kaki" id="ral_7008" style="background-color:#756444;">
                                                        Ral 7008 - Gris kaki										</option>
                                                    <option value="Ral 7009 - Gris vert" id="ral_7009" style="background-color:#585e55;">
                                                        Ral 7009 - Gris vert										</option>
                                                    <option value="Ral 7010 - Gris tente" id="ral_7010" style="background-color:#565957;">
                                                        Ral 7010 - Gris tente										</option>
                                                    <option value="Ral 7011 - Gris fer" id="ral_7011" style="background-color:#525a60;">
                                                        Ral 7011 - Gris fer										</option>
                                                    <option value="Ral 7012 - Gris basalte" id="ral_7012" style="background-color:#575e62;">
                                                        Ral 7012 - Gris basalte										</option>
                                                    <option value="Ral 7013 - Gris brun" id="ral_7013" style="background-color:#585346;">
                                                        Ral 7013 - Gris brun										</option>
                                                    <option value="Ral 7015 - Gris ardoise" id="ral_7015" style="background-color:#4c5057;">
                                                        Ral 7015 - Gris ardoise										</option>
                                                    <option value="Ral 7021 - Gris noir" id="ral_7021" style="background-color:#2e3236;">
                                                        Ral 7021 - Gris noir										</option>
                                                    <option value="Ral 7022 - Gris terre dombre" id="ral_7022" style="background-color:#464644;">
                                                        Ral 7022 - Gris terre d'ombre										</option>
                                                    <option value="Ral 7023 - Gris béton" id="ral_7023" style="background-color:#7f8279;">
                                                        Ral 7023 - Gris béton										</option>
                                                    <option value="Ral 7024 - Gris graphite" id="ral_7024" style="background-color:#484b52;">
                                                        Ral 7024 - Gris graphite										</option>
                                                    <option value="Ral 7026 - Gris granit" id="ral_7026" style="background-color:#354044;">
                                                        Ral 7026 - Gris granit										</option>
                                                    <option value="Ral 7030 - Gris pierre" id="ral_7030" style="background-color:#919089;">
                                                        Ral 7030 - Gris pierre										</option>
                                                    <option value="Ral 7031 - Gris bleu" id="ral_7031" style="background-color:#5b686f;">
                                                        Ral 7031 - Gris bleu										</option>
                                                    <option value="Ral 7032 - Gris silex" id="ral_7032" style="background-color:#b5b5a7;">
                                                        Ral 7032 - Gris silex										</option>
                                                    <option value="Ral 7033 - Gris ciment" id="ral_7033" style="background-color:#7a8376;">
                                                        Ral 7033 - Gris ciment										</option>
                                                    <option value="Ral 7034 - Gris jaune" id="ral_7034" style="background-color:#928d75;">
                                                        Ral 7034 - Gris jaune										</option>
                                                    <option value="Ral 7035 - Gris clair" id="ral_7035" style="background-color:#c4caca;">
                                                        Ral 7035 - Gris clair										</option>
                                                    <option value="Ral 7036 - Gris platine" id="ral_7036" style="background-color:#949294;">
                                                        Ral 7036 - Gris platine										</option>
                                                    <option value="Ral 7037 - Gris poussière" id="ral_7037" style="background-color:#7e8082;">
                                                        Ral 7037 - Gris poussière										</option>
                                                    <option value="Ral 7038 - Gris agate" id="ral_7038" style="background-color:#b0b3af;">
                                                        Ral 7038 - Gris agate										</option>
                                                    <option value="Ral 7039 - Gris quartz" id="ral_7039" style="background-color:#6d6b64;">
                                                        Ral 7039 - Gris quartz										</option>
                                                    <option value="Ral 7040 - Gris fenêtre" id="ral_7040" style="background-color:#9aa0a7;">
                                                        Ral 7040 - Gris fenêtre										</option>
                                                    <option value="Ral 7042 - Gris trafic A" id="ral_7042" style="background-color:#929899;">
                                                        Ral 7042 - Gris trafic A										</option>
                                                    <option value="Ral 7043 - Gris trafic B" id="ral_7043" style="background-color:#505455;">
                                                        Ral 7043 - Gris trafic B										</option>
                                                    <option value="Ral 7044 - Gris soie" id="ral_7044" style="background-color:#bab9b0;">
                                                        Ral 7044 - Gris soie										</option>
                                                    <option value="Ral 7045 - Télé gris 1" id="ral_7045" style="background-color:#909090;">
                                                        Ral 7045 - Télé gris 1										</option>
                                                    <option value="Ral 7046 - Télé gris 2" id="ral_7046" style="background-color:#82898f;">
                                                        Ral 7046 - Télé gris 2										</option>
                                                    <option value="Ral 7047 - Télé gris 4" id="ral_7047" style="background-color:#d0d0d0;">
                                                        Ral 7047 - Télé gris 4										</option>
                                                    <option value="Ral 7048 - Gris souris nacré" id="ral_7048" style="background-color:#898176;">
                                                        Ral 7048 - Gris souris nacré										</option>
                                                    <option value="Ral 8000 - Brun vert" id="ral_8000" style="background-color:#8b7045;">
                                                        Ral 8000 - Brun vert										</option>
                                                    <option value="Ral 8001 - Terre de Sienne" id="ral_8001" style="background-color:#9c6935;">
                                                        Ral 8001 - Terre de Sienne										</option>
                                                    <option value="Ral 8002 - Brun de sécurité" id="ral_8002" style="background-color:#774c3b;">
                                                        Ral 8002 - Brun de sécurité										</option>
                                                    <option value="Ral 8003 - Brun argile" id="ral_8003" style="background-color:#815333;">
                                                        Ral 8003 - Brun argile										</option>
                                                    <option value="Ral 8004 - Brun cuivré" id="ral_8004" style="background-color:#904e3b;">
                                                        Ral 8004 - Brun cuivré										</option>
                                                    <option value="Ral 8007 - Brun fauve" id="ral_8007" style="background-color:#6b442a;">
                                                        Ral 8007 - Brun fauve										</option>
                                                    <option value="Ral 8008 - Brun olive" id="ral_8008" style="background-color:#735230;">
                                                        Ral 8008 - Brun olive										</option>
                                                    <option value="Ral 8011 - Brun noisette" id="ral_8011" style="background-color:#5b3927;">
                                                        Ral 8011 - Brun noisette										</option>
                                                    <option value="Ral 8012 - Brun rouge" id="ral_8012" style="background-color:#64312a;">
                                                        Ral 8012 - Brun rouge										</option>
                                                    <option value="Ral 8014 - Brun sépia" id="ral_8014" style="background-color:#49372a;">
                                                        Ral 8014 - Brun sépia										</option>
                                                    <option value="Ral 8015 - Marron" id="ral_8015" style="background-color:#5a2e2a;">
                                                        Ral 8015 - Marron										</option>
                                                    <option value="Ral 8016 - Brun acajou" id="ral_8016" style="background-color:#4f3128;">
                                                        Ral 8016 - Brun acajou										</option>
                                                    <option value="Ral 8017 - Brun chocolat" id="ral_8017" style="background-color:#45302b;">
                                                        Ral 8017 - Brun chocolat										</option>
                                                    <option value="Ral 8019 - Brun gris" id="ral_8019" style="background-color:#3b3332;">
                                                        Ral 8019 - Brun gris										</option>
                                                    <option value="Ral 8022 - Brun noir" id="ral_8022" style="background-color:#1e1a1a;">
                                                        Ral 8022 - Brun noir										</option>
                                                    <option value="Ral 8023 - Brun orangé" id="ral_8023" style="background-color:#a45c32;">
                                                        Ral 8023 - Brun orangé										</option>
                                                    <option value="Ral 8024 - Brun beige" id="ral_8024" style="background-color:#7b5741;">
                                                        Ral 8024 - Brun beige										</option>
                                                    <option value="Ral 8025 - Brun pâle" id="ral_8025" style="background-color:#765d4d;">
                                                        Ral 8025 - Brun pâle										</option>
                                                    <option value="Ral 8028 - Brun terre" id="ral_8028" style="background-color:#4f3b2b;">
                                                        Ral 8028 - Brun terre										</option>
                                                    <option value="Ral 9001 - Blanc crème" id="ral_9001" style="background-color:#eee9da;color:#000;">
                                                        Ral 9001 - Blanc crème										</option>
                                                    <option value="Ral 9002 - Blanc gris" id="ral_9002" style="background-color:#dadbd5;color:#000;">
                                                        Ral 9002 - Blanc gris										</option>
                                                    <option value="Ral 9003 - Blanc de sécurité" id="ral_9003" style="background-color:#f8f9fb;color:#000;">
                                                        Ral 9003 - Blanc de sécurité										</option>
                                                    <option value="Ral 9004 - Noir de sécurité" id="ral_9004" style="background-color:#252427;">
                                                        Ral 9004 - Noir de sécurité										</option>
                                                    <option value="Ral 9005 - Noir foncé" id="ral_9005" style="background-color:#151619;">
                                                        Ral 9005 - Noir foncé										</option>
                                                    <option value="Ral 9010 - Blanc pur" id="ral_9010" style="background-color:#f4f4ed;color:#000;">
                                                        Ral 9010 - Blanc pur										</option>
                                                    <option value="Ral 9011 - Noir graphite" id="ral_9011" style="background-color:#1f2126;">
                                                        Ral 9011 - Noir graphite										</option>
                                                    <option value="Ral 9016 - Blanc trafic" id="ral_9016" style="background-color:#f3f6f6;color:#000;">
                                                        Ral 9016 - Blanc trafic										</option>
                                                    <option value="Ral 9017 - Noir trafic" id="ral_9017" style="background-color:#1b191d;">
                                                        Ral 9017 - Noir trafic										</option>
                                                    <option value="Ral 9018 - Blanc papyrus" id="ral_9018" style="background-color:#cbd2d0;color:#000;">
                                                        Ral 9018 - Blanc papyrus										</option>
                                                </select>
                                            </div>
                                        </div>
                                        <!-----------------------------------------------------------------------Poigné-------------------------------------------------------------->


                                        <div class="col-5" >
                                            <div  class="" id="poigneId" name="poigne">
                                                <strong> <p style="margin-right:3px;">Sélectionnez Votre Poignée :  </p></strong>
                                                <div class="d-flex">
                                                    <div class="form-check">
                                                        <p style="margin-right:3px;text-transform: uppercase"">PAS DE POIGNéE </p>
                                                        <input  type="radio"  id="poigne3"   class="form-check-input" name="poigne" value="encastre" >
                                                        <label for="poigne3"><img src="img/sanspoigne.png"  class="img-fluid" /> </label>
                                                    </div>
                                                    <div class="form-check" >
                                                        <p style="margin-right:3px;text-transform: uppercase">Poignée STANDARD</p>
                                                        <input  type="radio"  id="poigne1"  class="form-check-input" name="poigne" value="standard">
                                                        <label for="poigne1"><img src="img/poignée%20standard.jpg"  class="img-fluid" /> </label>
                                                    </div>
                                                    <div class="form-check">
                                                        <p style="margin-right:3px;text-transform: uppercase">Poignée ENCASTRÉ </p>
                                                        <input  type="radio"  id="poigne2"   class="form-check-input" name="poigne" value="encastre" >
                                                        <label for="poigne2">  <img src="img/poignée%20encastré.jpg"  class="img-fluid"/></label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </form>

                            <!-------------------------------------------------------OPTIONS-------------------------------------------------------------------------- -->

                            <div class="btn btn-success" value='hide/show' title="Add field" style="font-weight: bold;text-transform: uppercase;text-align: center;font-size:15px;align-content: center;padding:2%;"> AJOUTEZ DES OPTIONS  </DIV>



                            <br>

                            <br>
                            <br>
                            <br>




                            <div id="configHtml" style="display:">
                                <!-------------------------------------------------------PORTILLON-------------------------------------------------------------------------- -->
                                <div class="mt-2">
                                    <div class="d-flex"  name="protillon" id="portillonId" value="porte de service">
                                        <strong> <P data-toggle="tooltip" data-placement="top" title="LA PHRASE POUR PORTILLON EST LEXPLICATION ICI EXEMPLE....">PORTILLON DE SERVICE :</P></strong>
                                        <li  id="PQte" style="width:30%;display: none;"><label>Qte:</label><input class="form-check-label" type="number"></li>


                                        <div class="form-check" style="margin-top:-18px;" >
                                            <input type="radio" class="custom-radio custom-control-inline" id=port1  value="Oui" name="portillon" onchange="prixportillon();"   >
                                            <label class="form-check-label" for="port1">OUI  <img src="img/portillon.jpg"  class="img-fluid"  data-toggle="tooltip" data-placement="top" title="LA PHRASE POUR PORTILLON EST LEXPLICATION ICI EXEMPLE...." /></label>
                                        </div>


                                        <div class="form-check" style="margin-top:-18px;">
                                            <input type="radio" class="custom-radio custom-control-inline" id="port2"  value="Non" name="portillon" onchange="prixsansPortiollon();" checked >
                                            <label class="form-check-label" for="port2">NON  <img src="img/portillonsans.jpg"  class="img-fluid" /> </label>
                                        </div>

                                    </div>
                                    </br>
                                    <!------------------------------------------------------------------POSITION PORTILLON-------------------------------------------------------------------------- -->
                                    </br>

                                    <div id="portillon" >
                                    <div class="d-flex">
                                        <P style="margin-left: 10px;padding:1px;" data-toggle="tooltip" data-placement="top" title="Emplacement Portillon vue de l'extérieur">Position Portillon </P>

                                        <div class="form-group">

                                            <div class="d-flex">
                                                <div class="form-check" style="margin-top:-18px;">
                                                    <input type="radio" class="custom-radio custom-control-inline" id=position1 name="position"  value="oui" data-toggle="modal" data-target="#modalQuickView1">
                                                    <label class="form-check-label" for="position1">DROITE</label>
                                                </div>

                                                <!-- Group of material radios - option 2 -->
                                                <div class="form-check" style="margin-top:-18px;">
                                                    <input type="radio" class="custom-radio custom-control-inline" id="position2" name="position" data-toggle="modal" data-target="#modalQuickView2">
                                                    <label class="form-check-label" for="position2">GAUCHE</label>
                                                </div>
                                                <div class="form-check" style="margin-top:-18px;">
                                                    <input type="radio" class="custom-radio custom-control-inline" id="position3" name="position" data-toggle="modal" data-target="#modalQuickView3">
                                                    <label class="form-check-label" for="position3">CENTRE</label>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
<br>
                                    <!-------------------------------------------------------OUVERTURE- PORTILLON------------------------------------------------------------------------- -->
                                    <div class="d-flex">
                                        <P style="padding:10px;font-family: Arial ;text-align: justify;" data-toggle="tooltip" data-placement="top" title="sens d'ouverture du votre Portillon" style="font-size: 10px;font-family:'Italic'" >Sens d'ouverture Portillon </P>

                                        <div class="d-flex">
                                            <div class="form-check" style="margin-top:-18px;">
                                                <input type="radio" class="custom-radio custom-control-inline" id="tirant1" value="1" name="tirant" onchange="tirant()">
                                                <label class="form-check-label" for="tirant1">TIRANT  DROITE</label>
                                            </div>

                                            <!-- Group of material radios - option 2 -->
                                            <div class="form-check" style="margin-top:-18px;">
                                                <input type="radio" class="custom-radio custom-control-inline" id="tirant2"  value="2" name="tirant" onchange="tirant()">
                                                <label class="form-check-label" for="tirant2" >TIRANT GAUCHE</label>
                                            </div>

                                        </div>
                                        <img src="img/portillondroite.jpg" style="width:130px;height:100px;display:none " id="s1" >
                                        <img src="img/portillongauche.jpg" style="width:130px;height:100px;display:none " id="s2">
                                    </div>
<!--------------------------------------------------------------------------------------Groom--------------------------------------------------------------------------------------------------------------------->
                                <div id="autreaccess">
                                    <strong><label> Groom :</label></strong><P style="font-family: 'Italic';font-size: 15px;text-transform: uppercase;">PERMET DE FERMER VOTRE PORTILLON AUTOMATIQUEMENT</P>
                                    <img src="img/Groome.png" style="width:150px;height: 150px;margin-left:30%;"  >
                                    <div class="d-flex justify-content-center">

                                        <div class="form-check" style="margin-top:-18px;">
                                            <input type="radio" class="custom-radio custom-control-inline" id=groom1  name="groom" onchange="prixgroom()">
                                            <label class="form-check-label" for="groom1" style="font-weight: bold">OUI</label>
                                        </div>

                                        <!-- Group of material radios - option 2 -->
                                        <div class="form-check" style="margin-top:-18px;">
                                            <input type="radio" class="custom-radio custom-control-inline" id="groom2" name="groom" value="non" onchange="prixsansgroom();" checked>
                                            <label class="form-check-label" for="groom2" style="font-weight: bold;">NON</label>
                                        </div>
                                    </div>
                                </div>
                                    <!------------------------------------------Quantite-------------------------------------------------------------------------------------------------------------->
                                </div>
                                </div>
<BR>
                                <ul class="d-flex">
                                    <strong style="padding: 5px;">Hublots Qte  </strong>


                                <li><input  id="hQte" class="form-check-label" min="0" max="4" style="width:50%;display:none ;padding:5px;" onkeyup="prixHublotRectangle();" onchange=";quantiteHublot()"></li>
                                <div id="qth" style="color: #ff0504;font-size: 12px;font-weight: bold;"></div>
                                <li><input id="hQte1" class="form-check-label" min="0" max="4" style="width:50%;display: none;padding:5px;" onkeyup="prixHublotOvale();" onchange="quantiteHublot1();"></li>
                                <div id="qth1" style="color: #ff0504;font-size: 12px;font-weight: bold;"></div>
                                <li><input  id="hQte2" class="form-check-label" min="0" max="4" style="width:50%;display: none;padding: 5px;" onchange="quantiteHublot2();" onkeyup="prixventillation();"></li>
                                </ul>
                                <div id="qth2" style="color: #ff0504;font-size: 12px;font-weight: bold;"></div>

                                <!---------------------------------------------------------Hublots---------------------------------------------------------->
                                <div class="d-flex">
                                    <div class="form-check">
                                        <input type="checkbox" class="form-check-input" id="hublot1" name="hublot" value="hublot rectangulaire"  onkeyup="prixHublotRectangle();" onchange="hublotAffiche();finitionAffiche();">
                                        <label class="form-check-label" for="hublot1"><img src="img/hublotrectangle.png"/>hublot rectangulaire</label>
                                    </div>


                                    <div class="form-check">
                                        <input type="checkbox" class="form-check-input" id="hublot2"  name="hublot" value="hublot ovale"  onkeyup="prixHublotOvale();" onchange="hublotAffiche();finitionAffiche();" >
                                        <label class="form-check-label" for="hublot2"><img src="img/hublotovale.png">Hublot Ovale</label>
                                    </div>


                                    <div class="form-check">
                                        <input type="checkbox" class="form-check-input" id="hublot3"  name="hublot" value="ventilation" onkeyup="prixventillation();" onchange="hublotAffiche();finitionAffiche();">
                                        <label class="form-check-label" for="hublot3"><img src="img/grille%20de%20ventilation.jpg"/>Grille de ventilation</label>
                                    </div>
                                </div>








                                <!--  <ul class="d-flex">
                                      <strong><label>Formes Hublots  </label></strong>
                                      <li class="form-check"><input type="radio"  class="custom-radio custom-control-inline"  id="hublot1" name="hublot" value="hublot rectangulaire" onchange="hublotAffiche();" />
                                          <label class="form-check-label" for="hublot1" style="font-size: 14px;text-transform: uppercase;"><img src="img/hublotrectangle.png"/><br>hublot rectangulaire
                                          </label>

                                      </li>
                                      <li class="form-check"><input type="radio" class="custom-radio custom-control-inline"  id="hublot2"  name="hublot" value="hublot ovale" onchange="hublotAffiche();" />
                                          <label  class="form-check-label" for="hublot2" style="font-size: 14px;text-transform: uppercase;"><img src="img/hublotovale.png" />Hublot Ovale
                                          </label>

                                      </li>
                                      <li class="form-check"><input type="radio" class="custom-radio custom-control-inline"  id="hublot3"  name="hublot" value="ventilation" onchange="hublotAffiche();" />
                                          <label  class="form-check-label" for="hublot3" style="font-size: 14px;text-transform: uppercase;"><img src="img/grille%20de%20ventilation.jpg" /><BR>Grille de ventilation
                                          </label>

                                      </li>
                                  </ul>------>





           <!-------------------------------------------------------------------------------Finition hublots------------------------------------------------------------------------->

                                <div id="finitionaffiche" style="display: none" ONCHANGE="finitionAffiche();">

                                    <strong><label> Finition Hublots  : </label></strong>

                                    <div class="d-flex">
                                        <div class="form-check">
                                            <input type="checkbox" class="form-check-input"id="finition1" name="finition" value="translucide" onchange="hublotAffiche();prixFinition()" >
                                            <label class="form-check-label" for="finition1" style="font-size: 14px;text-transform: uppercase;">Finition Translucide<img src="img/FINITION1.png" />
                                            </label>
                                        </div>

                                        <!-- Default inline 2-->
                                        <div class="form-check">
                                            <input type="checkbox" class="form-check-input" id="finition2"  name="finition" value="opaque" onchange="hublotAffiche();prixFinition2()" >
                                            <label  class="form-check-label" for="finition2" style="font-size: 14px;text-transform: uppercase;">Finition Opaque<img src="img/FINITION3.png">
                                            </label>

                                        </div>

                                    </div>
                                </div>


                                </br>
                                </br>
                                <!----------------------------------------------------------------------Motorisation---------------------------------------------->


                                <div class="d-flex" style="display: inline-block;" >
                                    <strong> <P>Motorisation    <img src="img/motorisation.jpg" class="img-fluid" /></P></strong>

                                    <div class="form-check" style="margin-top:-18px;" >
                                        <input type="radio" class="custom-radio custom-control-inline" id=mot1  value="Oui" name="motorisation" onchange="afficheSecur(); afficheAcce();prixMoteur()">
                                        <label class="form-check-label" for="mot1">OUI</label>
                                    </div>

                                    <!-- Group of material radios - option 2 -->
                                    <div class="form-check" style="margin-top:-18px;">
                                        <input type="radio" class="custom-radio custom-control-inline" id="mot2" value="Non"  name="motorisation" onchange="afficheSecur(); afficheAcce();prixsansMoteur()" checked>
                                        <label class="form-check-label" for="mot2">NON</label>
                                    </div>
                                </div>
                                <!-------------------------------------------------------------------------------Sécurite portillon------------------------------------------------>










                                <div id="securiteId" style="display: none;">
                                    <div class="d-flex"  >
                                        <strong> <P>Sécurité Portillon </P></strong>
                                        <img src="img/securiteportillon.jpg" style="width:75px;height: 75px;">
                                        <div class="form-check" style="margin-top:-18px;">
                                            <input type="radio" class="custom-radio custom-control-inline" id=Sp1 name="securite"  value="Oui"  onchange="afficheSecur();prixsecuriteportillon()">
                                            <label class="form-check-label" for="Sp1"
                                            >OUI</label>
                                        </div>

                                        <!-- Group of material radios - option 2 -->
                                        <div class="form-check" style="margin-top:-18px;">
                                            <input type="radio" class="custom-radio custom-control-inline" id="Sp2" value="Non" name="securite" onchange="afficheSecur();prixsansecuriteportillon();" checked>
                                            <label class="form-check-label" for="Sp2">NON</label>
                                        </div>
                                    </div>
                                </div>



                                <br>
                                <br>

                                <!---------------------------------------------------------Accessoires---------------------------------------------------------->
                                <div id="accessId" style="display:none;">

                                    <strong><label> Accessoires : </label></strong>

                                    <div class="d-flex">
                                        <div class="form-check">
                                            <input type="checkbox" class="form-check-input" id="girId"  name="accessoire"  value="Gyrophare"  onchange="afficheAcce();prixgyrophare()">
                                            <label class="form-check-label" for="girId"><img src="img/girophare.jpg"/>GYROPHARE</label>
                                        </div>

                                        <!-- Default inline 2-->
                                        <div class="form-check">
                                            <input type="checkbox" class="form-check-input" id="photocelluleId" name="accessoire" value="Photocellules" onchange="afficheAcce();prixphotocellule()">
                                            <label class="form-check-label" for="photocelluleId"><img src="img/photocellule.jpg" />PHOTOCELLULE</label>
                                        </div>

                                        <div class="form-check">
                                            <input type="checkbox" class="form-check-input" id="deverouId"  name="accessoire" value="Deverrouillage exterieur" onchange="afficheAcce();prixdeverouillage()" >
                                            <label class="form-check-label" for="deverouId"><img src="img/DEVEROUILLAGE.png" />Déverroullage Ext</label>
                                        </div>
                                    </div>
                                    <div class="d-flex">
                                        <div class="form-check">
                                            <input type="checkbox" class="form-check-input" id="digicodeId" name="accessoire" value="Digicode radio" onchange="afficheAcce();prixdigicode()">
                                            <label class="form-check-label" for="digicodeId"><img src="img/digicode.JPG"/>DIGICODE</label>
                                        </div>


                                        <div class="form-check">
                                            <input type="checkbox" class="form-check-input" id="interrepId"  name="accessoire" value="Interrupteur a clef" onchange="afficheAcce();prixinterept()">
                                            <label class="form-check-label" for="interrepId"><img src="img/interrupteur.jpg"/>INTERREPTEUR</label>
                                        </div>


                                        <div class="form-check">
                                            <input type="checkbox" class="form-check-input" id="telecommandeId" name="accessoire" value="Telecommande 4 canaux" onchange="afficheAcce();prixtelecommande()" >
                                            <label class="form-check-label" for="telecommandeId"><img src="img/télécommande.jpg"/>TELECOMMANDE</label>
                                        </div>
                                    </div>



                                </div>

<br>

                                <br>

                            </div>




                            </br>
                            </br>

                            <!-- Button trigger modal -->

                        </div>
                    </div>


            </div>
        </div>
    </div>
</div>
<div class="modal fade" id="modalQuickView1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
     aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-body">

                <div class="card-deck">
                    <div class="card">
                        <a href="#">
                            <img src="img/portillondroite.jpg" class="card-img-top" alt="portillon">
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="modal fade" id="modalQuickView2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
     aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-body">

                <div class="card-deck">
                    <div class="card">
                        <a href="#">
                            <img src="img/portillongauche.jpg" class="card-img-top" alt="portillon">
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="modal fade" id="modalQuickView3" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
     aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-body">

                <div class="card-deck">
                    <div class="card">
                        <a href="#">
                            <img src="img/portilloncentre.jpg" class="card-img-top" alt="portillon">
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="modal fade" id="securiteportillon" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
     aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-body">

                <div class="card-deck">
                    <div class="card">
                        <a href="#">
                            <img src="img/securiteportillon.jpg" class="card-img-top" alt="portillon">
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="modal fade" id="Viewgroom" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
     aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-body">

                <div class="card-deck">
                    <div class="card">
                        <a href="#">
                            <img src="img/Groome.png" class="card-img-top" alt="groom">
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="modal fade" id="image1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
     aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-body">

                <div class="card-deck">
                    <div class="card">
                        <a href="#">
                            <img src="img/DR/transparent1.png" class="card-img-top" alt="pdgs" id="image1">
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="modal fade" id="image2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
     aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-body">

                <div class="card-deck">
                    <div class="card" id="image2">
                        <a href="#">
                            <img src="img/DR/transparent%202.png" class="card-img-top" alt="pdgs" >
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="modal fade" id="image3" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
     aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-body">

                <div class="card-deck">
                    <div class="card">
                        <a href="#"  id="image3" >
                            <img src="img/DR/transparent%203.png"  class="card-img-top" alt="pdgs" >
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<!--Modal: modalRelatedContent-->
<div class="modal fade right" id="dimension" tabindex="-1" role="dialog"
     aria-labelledby="myModalLabel" aria-hidden="true" data-backdrop="false">
    <div class="modal-dialog modal-side modal-bottom-right modal-notify modal-info" role="document">
        <!--Content-->
        <div class="modal-content" >
            <!--Header-->
            <div class="modal-header">
                <p class="heading" style="text-align: center;font-weight: bold;font-family: italic;font-weight: bold;padding-left: 15%;">Mesurer Votre porte de garage: </p>

                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true" class="white-text">&times;</span>
                </button>
            </div>

            <!--Body-->
            <div class="modal-body" >

                <div class="row">

                    <div class="col-12">
                        <p><strong>La prise de côtes</strong></p>
                        <p>

                            Pour l’installation d’une porte de garage, la prise des côtes est l’étape la plus importante. Nao Fermetures vous donne les indications précises pour mesurer efficacement vos dimensions. Grâce à cette prise de côte, nous allons pouvoir vous établir une estimation de prix la plus précise possible et sur les contraintes que pourrait rencontrer votre projet. Pour effectuer cette étape correctement, prenez soin de bien suivre les indications suivantes.</p>

                    </div>

                </div>
                <BR>

                <div class="row">
                    <div class="col-12">
                        <H5> <strong>1- Hauteur de tableau: </strong></H5>
                        <p>

                            Cette mesure est déterminante car elle correspond à la hauteur de passage libre. Posez le mètre du sol au début de votre mur et prenez la mesure de la hauteur. Pour mesurer efficacement, nous vous conseillons de prendre la mesure sur 2 endroits différents, cela vous permettra de vérifier qu’il n’y a pas d’écart. Si vous relevez un écart, nous vous conseillons de conserver la côte la moins importante des deux.
                        </p>
                    </div>
                    <div class="col-12">

                        <img src="img/hauteurdebaie.jpg"
                             class="img-fluid" alt="">
                    </div>
                </div>
                <br>
                <div class="row">
                    <div class="col-12">
                        <H5>  <STRONG>   1-Largeur de tableau  :</STRONG> </H5>
                        <p>

                            Cette mesure va faire office de largeur de passage libre. Poser le mètre le long de votre baie et mesurez la largeur. Pour mesurer efficacement, nous vous conseillons de prendre la mesure sur 2 endroits différents, une en bas et l’autre en haut. Cette mesure permettra d’assurer l’absence totale d’écart. Si vous relevez un écart, nous vous conseillons de conserver la côte la moins importante des deux.

                        </p>
                    </div>
                    <br>
                    <div class="col-12">

                        <img src="img/largeurdebaie.jpg"
                             class="img-fluid" alt="">
                    </div>
                </div>
                <div class="row">

                    <div class="col-12">
                        <H5>   <strong>   1-Écoinçons Droit (ecd) :</strong> </H5>
                        <p>

                            Il s’agit de la cote qui va définir l’espace entre le<strong>montant droit de la porte</strong> et <strong>le mur droit du garage</strong>. S’il n’y a pas d’espace, indiquez 0 cm. Pour l’installation des éléments de la porte, nous préconisons un écoinçon droit de 75mm (si vous n’avez pas cette distance, nous avons d’autres moyens de fabrication comme la création de faux linteau au design d la porte. Veillez à bien indiquez si des obstacles sont positionnés sur l’écoinçon droit (tuyau, gaines électriques, etc.).
                        </p>
                    </div>
                    <div class="col-12">

                        <img src="img/coiçondroite.jpg"
                             class="img-fluid" alt="">
                    </div>

                </div>
                <div class="row">

                    <div class="col-12">
                        <H5>      <strong>    1-Écoinçons gauche (ecg) </strong> </H5>
                        <p>

                            Il s’agit de la cote qui va définir l’espace entre<strong> le montant droit de la porte </strong>et<strong> le mur droit du garage</strong>. S’il n’y a pas d’espace, indiquez 0 cm. Pour l’installation des éléments de la porte, nous préconisons un écoinçon gauche de 75mm (si vous n’avez pas cette distance, nous avons d’autres moyens de fabrication comme la création de faux linteau au design de la porte). Veillez à bien indiquez si des obstacles sont positionnés sur l’écoinçon gauche (tuyau, gaines électriques, etc.).
                        </p>
                    </div>
                    <div class="col-12">

                        <img src="img/coiçongauche.jpg"
                             class="img-fluid" alt="">
                    </div>

                </div>
                <div class="row">

                    <div class="col-12">
                        <H5>      <strong>      5-Linteau </strong> </H5>
                        <p>
                            Comme pour la prise de mesure de votre ouverture de baie, prenez la mesure de la hauteur entre <strong>le haut de l’ouverture et le plafond du garage</strong>. Vérifiez la prise de mesure en 2 points afin d’identifier des écarts potentiels Veillez à bien indiquez si des obstacles sont positionnés sur le linteau (tuyau, gaines électriques, etc.).

                        </p>
                    </div>
                    <div class="col-12">

                        <img src="img/hauteurlinteau.jpg"
                             class="img-fluid" alt="">
                    </div>

                </div>

                <div class="row">

                    <div class="col-12">
                        <H5>      <strong>    1-Refoulement </strong> </H5>
                        <p>

                            Cette mesure correspond au potentiel total de votre garage. Cette mesure est importante car elle va définir le <strong>refoulement nécessaire à votre porte de garage</strong>.
                    </div>
                    <div class="col-12">

                        <img src="img/profondeurgarage.jpg"
                             class="img-fluid" alt="">
                    </div>

                </div>
            </div>
        </div>
        <!--/.Content-->
    </div>
</div>
<!-- Full Height Modal Right -->
<!-- Central Modal Medium Success -->
<div class="modal fade" id="centralModalSuccess" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
     aria-hidden="true">
    <div class="modal-dialog modal-notify modal-success" role="document">
        <!--Content-->
        <div class="modal-content">
            <!--Header-->
            <div class="modal-header">
                <p class="heading lead" style="font-family: italic;text-align: center; padding-left: 30%;">VOTRE COMMANDE </p>

                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true" class="white-text">&times;</span>
                </button>
            </div>

            <!--Body-->
            <div class="modal-body" ONCHANGE="resume();">
                <div class="text-center">
                    <i class="fa fa-check fa-4x mb-3 animated rotateIn"></i>

                    <ul>
                        <li id="quantite" style="font-weight: bold ;font-size: 15px;"></li></br>
                        <li id="largeur" style="font-weight: bold;font-size: 15px;">  </li></br>
                        <li id="hauteur" style="font-weight: bold;font-size: 15px">  </li></br>
                    <li id="ecg" style="font-weight: bold;font-size: 15px;"> </li></br>
                        <li id="ecd" style="font-weight: bold;font-size: 15px;"> </li></br>
                        <li id="linteau" style="font-weight: bold;font-size: 15px;"> </li></br>
                        <li id="refoulement1" style="font-weight: bold;font-size: 15px;"></li></br>
                        <li id="couleurchoisi" style="font-weight: bold;font-size: 15px;"></li></br>
                        <li id="RAL1" style="font-weight: bold;font-size: 15px;"></li></br>
                        <li id="poi" style="font-weight: bold;font-size: 15px;"></li></br>
                    </ul>
                </div>
            </div>

            <!--Footer-->
          <!----  <div class="modal-footer justify-content-center">
                <a type="button" class="btn btn-success">DEMANDEZ VOTRE DEVIS<i class="far fa-gem ml-1 text-white"></i></a>
                <a type="button" class="btn btn-outline-success waves-effect" data-dismiss="modal">COMMANDEZ EN LIGNE</a>
            </div>
        </div>---->
        <!--/.Content-->
    </div>
</div>
<!-- Central Modal Medium Success-->
<!-- Full Height Modal Right -->
    <footer class="container" id="footer" style="background-color: rgb(11,9,22);max-width: 100%;">

        <div class="container">
            <a href="" style="color:white;margin-left:35%">Mentions Légales</a> <span style="color: #eeeeee;font-weight: bold">|</span> <a href="" style="color:white;text-align: center;">Contact</a>
            <p class="m-0 text-center text-white">Copyright &copy; Tous droits réservés.  Configurteur <a href="https://www.nao-fermetures.fr/" style="color: #eeeeee">https://www.nao-fermetures.fr/   2019/2020</a></p>
            <a href="" style="color:white;margin-left:35%">Réalisation Nao Fermeture</a>
            <br>
            <p class="stopper-text" style="padding-left: 40%;color:green;font-weight: bold;text-transform: uppercase;"> Suivez Nous </p>
            <a href="https://www.facebook.com/naofermetures/" class="fa fa-facebook" style="width:50px;color:green;margin-left: 35%;"></a>
            <a href="https://twitter.com/NAOFermetures" class="fa fa-twitter" style="width:50px;color: green;"></a>
            <a href="https://www.instagram.com/naofermetures/?hl=fr" class="fa fa-instagram" style="width:50px;color: green;"></a>
        </div>
        <!-- /.container -->
        <button onclick="topFunction()" id="myBtn1" title="Go to top"><img src="img/fleche.png" style="width:40px; height:40px;"></button>
    </footer>


</div>
<style>
    #myBtn1 {
        position: fixed;
        bottom: 20px;
        right: 30px;
        z-index: 99;
        font-size: 13px;
        border: none;
        outline: none;
        cursor: pointer;
        padding: 15px;
        border-radius: 4px;

    }



</style>



<script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>



<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>

<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>


<script src="script.js"></script>
<script>
    // When the user scrolls down 20px from the top of the document, show the button
    document.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("myBtn1").style.display = "block";
        } else {
            document.getElementById("myBtn1").style.display = "none";
        }
    }

    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
</script>
<script>

    $(function(){

        $(".sticky-content").sticky({
            topSpacing: 50,
            zIndex: 2,
            stopper: "#footer",
        });

    });

    $( function() {
        $( document ).tooltip();
    } );
</script>



















</body>
</html>