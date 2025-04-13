const frases = [
    "El amor es la respuesta.", // Día 1
    "Cada día te quiero más.", // Día 2
    "Contigo, todo es mejor.", // Día 3
    "El amor verdadero nunca se apaga.", // Día 4
    "Eres mi razón de ser.", // Día 5
    "Tu sonrisa ilumina mi universo.", // Día 6
    "Amar es encontrar un alma gemela.", // Día 7
    "Eres mi mejor decisión.", // Día 8
    "Mi corazón late al ritmo de tu nombre.", // Día 9
    "En tus ojos encontré mi hogar.", // Día 10
    "El amor no cuenta los días, hace que los días cuenten.", // Día 11
    "Eres mi sueño hecho realidad.", // Día 12
    "Contigo el tiempo vuela.", // Día 13
    "Tu amor es mi fuerza.", // Día 14
    "Eres la melodía de mi corazón.", // Día 15
    "Amar es compartir el alma.", // Día 16
    "Eres mi lugar seguro.", // Día 17
    "Cada día contigo es una nueva aventura.", // Día 18
    "Tu amor es mi vitamina diaria.", // Día 19
    "Eres mi estrella polar.", // Día 20
    "Amar es ver la perfección en lo imperfecto.", // Día 21
    "Eres mi dosis de felicidad.", // Día 22
    "Contigo hasta el infinito y más allá.", // Día 23
    "Tu amor es mi refugio.", // Día 24
    "Eres mi puzzle completo.", // Día 25
    "Amar es elegirte todos los días.", // Día 26
    "Eres mi mejor medicina.", // Día 27
    "Contigo hasta que las estrellas se apaguen.", // Día 28
    "Tu amor es mi superpoder.", // Día 29
    "Eres mi motivo para sonreír al despertar.", // Día 30
    "Amar es crecer juntos.", // Día 31
    "Eres mi capítulo favorito.", // Día 32
    "Contigo el frío se convierte en calor.", // Día 33
    "Tu amor es mi brújula.", // Día 34
    "Eres mi obra maestra.", // Día 35
    "Amar es construir un mundo juntos.", // Día 36
    "Eres mi canción sin final.", // Día 37
    "Contigo hasta que los números pierdan sentido.", // Día 38
    "Tu amor es mi energía.", // Día 39
    "Eres mi mejor inversión.", // Día 40
    "Amar es encontrar paz en tu mirada.", // Día 41
    "Eres mi luna en la noche oscura.", // Día 42
    "Contigo hasta que el tiempo se detenga.", // Día 43
    "Tu amor es mi ancla.", // Día 44
    "Eres mi regalo del universo.", // Día 45
    "Amar es bailar al mismo ritmo.", // Día 46
    "Eres mi vitamina C de cada día.", // Día 47
    "Contigo hasta que las mareas dejen de subir.", // Día 48
    "Tu amor es mi combustible.", // Día 49
    "Eres mi sueño recurrente.", // Día 50
    "Amar es escribir nuestra propia historia.", // Día 51
    "Eres mi luz en la tormenta.", // Día 52
    "Contigo hasta que los ríos dejen de fluir.", // Día 53
    "Tu amor es mi algoritmo perfecto.", // Día 54
    "Eres mi código fuente de felicidad.", // Día 55
    "Amar es compartir el silencio.", // Día 56
    "Eres mi wifi emocional.", // Día 57
    "Contigo hasta que los bosques pierdan sus hojas.", // Día 58
    "Tu amor es mi ecuación perfecta.", // Día 59
    "Eres mi fórmula secreta.", // Día 60
    "Amar es encontrar el norte en tu voz.", // Día 61
    "Eres mi mapa del tesoro.", // Día 62
    "Contigo hasta que las montañas se vuelvan planas.", // Día 63
    "Tu amor es mi raíz cuadrada.", // Día 64
    "Eres mi constante en un mundo variable.", // Día 65
    "Amar es compartir la misma frecuencia.", // Día 66
    "Eres mi estrella fugaz permanente.", // Día 67
    "Contigo hasta que los océanos se sequen.", // Día 68
    "Tu amor es mi gravedad emocional.", // Día 69
    "Eres mi eclipse solar perpetuo.", // Día 70
    "Amar es navegar en tu universo.", // Día 71
    "Eres mi Big Bang personal.", // Día 72
    "Contigo hasta que los átomos dejen de vibrar.", // Día 73
    "Tu amor es mi teoría del todo.", // Día 74
    "Eres mi agujero negro de felicidad.", // Día 75
    "Amar es compartir la misma órbita.", // Día 76
    "Eres mi ecuación de Drake particular.", // Día 77
    "Contigo hasta que la entropía nos separe.", // Día 78
    "Tu amor es mi principio antropico.", // Día 79
    "Eres mi materia oscura luminosa.", // Día 80
    "Amar es sincronizar relojes cósmicos.", // Día 81
    "Eres mi paradoja temporal resuelta.", // Día 82
    "Contigo hasta que los quarks dejen de girar.", // Día 83
    "Tu amor es mi constante cosmológica.", // Día 84
    "Eres mi singularidad gravitacional.", // Día 85
    "Amar es fusionar nuestras galaxias.", // Día 86
    "Eres mi nebulosa de posibilidades.", // Día 87
    "Contigo hasta que los protones decaigan.", // Día 88
    "Tu amor es mi campo de Higgs emocional.", // Día 89
    "Eres mi agujero de gusano hacia la felicidad.", // Día 90
    "Amar es compartir el multiverso.", // Día 91
    "Eres mi teoría de cuerdas perfecta.", // Día 92
    "Contigo hasta que la velocidad de la luz sea superada.", // Día 93
    "Tu amor es mi principio de incertidumbre resuelto.", // Día 94
    "Eres mi paradoja de Fermi respondida.", // Día 95
    "Amar es crear nuestra propia relatividad.", // Día 96
    "Eres mi ecuación de Schrödinger positiva.", // Día 97
    "Contigo hasta que los agujeros negros evaporen.", // Día 98
    "Tu amor es mi radiación de Hawking emocional.", // Día 99
    "Eres mi curvatura espacio-temporal perfecta.", // Día 100
    "Eres la primavera que florece en mi invierno.", // Día 101
    "Amar es escuchar el silencio entre nuestros latidos.", // Día 102
    "Contigo hasta que el último reloj deje de tictaquear.", // Día 103
    "Tu amor es el jardín donde crecen mis sueños.", // Día 104
    "Eres mi café caliente en las mañanas frías.", // Día 105
    "Amar es encontrar el sentido de la vida en tu mirada.", // Día 106
    "Eres mi poema favorito escrito en el alma.", // Día 107
    "Contigo hasta que la última página del universo se escriba.", // Día 108
    "Tu risa es la banda sonora de mi felicidad.", // Día 109
    "Eres mi atardecer pintado con colores de eternidad.", // Día 110
    "Amar es construir castillos en el aire... y habitarlos juntos.", // Día 111
    "Eres mi contraseña para acceder a la felicidad.", // Día 112
    "Contigo hasta que el último faro se apague.", // Día 113
    "Tu amor es mi antídoto contra la rutina.", // Día 114
    "Eres mi nota al margen en el libro de la vida.", // Día 115
    "Amar es compartir el paraguas bajo la lluvia.", // Día 116
    "Eres mi dirección de correo en el servidor del corazón.", // Día 117
    "Contigo hasta que el último violín deje de llorar.", // Día 118
    "Tu amor es mi lámpara contra la oscuridad.", // Día 119
    "Eres mi algoritmo de búsqueda de alegría.", // Día 120
    "Amar es descubrir nuevos continentes en tu piel.", // Día 121
    "Eres mi huella digital en el cristal del tiempo.", // Día 122
    "Contigo hasta que el último suspiro se convierta en canción.", // Día 123
    "Tu amor es mi museo de momentos perfectos.", // Día 124
    "Eres mi contrato de permanencia vitalicia.", // Día 125
    "Amar es bailar descalzos sobre las nubes.", // Día 126
    "Eres mi palabra clave en el diccionario de la vida.", // Día 127
    "Contigo hasta que los espejos olviden nuestros reflejos.", // Día 128
    "Tu amor es mi cofre del tesoro sin candado.", // Día 129
    "Eres mi código QR hacia el paraíso.", // Día 130
    "Amar es escribir 'nosotros' con tinta indeleble.", // Día 131
    "Eres mi sinfonía inacabada de ternura.", // Día 132
    "Contigo hasta que los calendarios sean solo recuerdos.", // Día 133
    "Tu amor es mi dosis diaria de realidad aumentada.", // Día 134
    "Eres mi filtro favorito en la foto de la vida.", // Día 135
    "Amar es compartir el mando a distancia del corazón.", // Día 136
    "Eres mi notificación más esperada cada día.", // Día 137
    "Contigo hasta que el último semáforo se quede en verde.", // Día 138
    "Tu amor es mi aplicación favorita sin necesidad de WiFi.", // Día 139
    "Eres mi backup emocional en la nube del alma.", // Día 140
    "Amar es crear memoros eternos contigo.", // Día 141
    "Eres mi playlist de canciones que nunca envejecen.", // Día 142
    "Contigo hasta que los emoticones se vuelvan obsoletos.", // Día 143
    "Tu amor es mi pantalla de carga hacia la felicidad.", // Día 144
    "Eres mi actualización favorita en el sistema de la vida.", // Día 145
    "Amar es compartir la batería cuando uno está bajo de energía.", // Día 146
    "Eres mi trending topic permanente.", // Día 147
    "Contigo hasta que el último pixel desaparezca.", // Día 148
    "Tu amor es mi modo avión para desconectar del mundo.", // Día 149
    "Eres mi cookie aceptada sin leer términos y condiciones.", // Día 150
    "Amar es sincronizar nuestras almas como dispositivos Bluetooth.", // Día 151
    "Eres mi certificado SSL de confianza absoluta.", // Día 152
    "Contigo hasta que el último megabyte se transmita.", // Día 153
    "Tu amor es mi firewall contra la tristeza.", // Día 154
    "Eres mi shortcut hacia la paz interior.", // Día 155
    "Amar es compartir el historial de navegación del corazón.", // Día 156
    "Eres mi repositorio de momentos inolvidables.", // Día 157
    "Contigo hasta que los lenguajes de programación se olviden.", // Día 158
    "Tu amor es mi encriptación de felicidad indescifrable.", // Día 159
    "Eres mi API de conexión emocional perfecta.", // Día 160
    "Amar es hacer debug juntos a los problemas de la vida.", // Día 161
    "Eres mi loop infinito de cariño.", // Día 162
    "Contigo hasta que el último botón deje de funcionar.", // Día 163
    "Tu amor es mi algoritmo de compresión que expande la felicidad.", // Día 164
    "Eres mi variable constante en la ecuación de la vida.", // Día 165
    "Amar es compartir el mismo ancho de banda emocional.", // Día 166
    "Eres mi captura de pantalla del paraíso.", // Día 167
    "Contigo hasta que el último plugin deje de actualizarse.", // Día 168
    "Tu amor es mi DNS que siempre resuelve a felicidad.", // Día 169
    "Eres mi framework para construir sueños.", // Día 170
    "Amar es hacer pair programming con el corazón.", // Día 171
    "Eres mi commit diario de amor eterno.", // Día 172
    "Contigo hasta que el último código sea legacy.", // Día 173
    "Tu amor es mi SaaS (Sonrisa as a Service).", // Día 174
    "Eres mi machine learning de emociones positivas.", // Día 175
    "Amar es compartir el mismo hash de felicidad.", // Día 176
    "Eres mi responsive design en el caos de la vida.", // Día 177
    "Contigo hasta que el último bug sea solucionado.", // Día 178
    "Tu amor es mi IoT (Intimidad de Objetos Tiernos).", // Día 179
    "Eres mi UX diseñado para la felicidad perpetua.", // Día 180
    "Amar es ser Agile en la metodología del corazón.", // Día 181
    "Eres mi blockchain de confianza inquebrantable.", // Día 182
    "Contigo hasta que el último cache sea borrado.", // Día 183
    "Tu amor es mi IDE para crear futuros brillantes.", // Día 184
    "Eres mi JSON de datos amorosos bien formateado.", // Día 185
    "Amar es compartir el mismo stack tecnológico-emocional.", // Día 186
    "Eres mi servidor cloud de abrazos infinitos.", // Día 187
    "Contigo hasta que el último registro sea eliminado.", // Día 188
    "Tu amor es mi CLI de comandos afectuosos.", // Día 189
    "Eres mi regex que encuentra perfección en la imperfección.", // Día 190
    "Amar es hacer deploy de sonrisas cada mañana.", // Día 191
    "Eres mi webhook de conexión emocional.", // Día 192
    "Contigo hasta que el último log sea overwriteado.", // Día 193
    "Tu amor es mi API REST de paz interior.", // Día 194
    "Eres mi SDK para desarrollar amor eterno.", // Día 195
    "Amar es compartir el mismo protocolo de ternura.", // Día 196
    "Eres mi container de docker lleno de cariño.", // Día 197
    "Contigo hasta que el último endpoint deje de responder.", // Día 198
    "Tu amor es mi sistema distribuido a prueba de fallos.", // Día 199
    "Eres mi JWT de autenticación emocional.", // Día 200
    "Eres mi aurora boreal en las noches más oscuras.", // Día 201  
    "Amar es escribir una receta con ingredientes de alma.", // Día 202  
    "Contigo hasta que el último marcador de libro se desvanezca.", // Día 203  
    "Tu amor es el faro que guía mi barco en la tormenta.", // Día 204  
    "Eres mi café con leche espumoso en días grises.", // Día 205  
    "Amar es pintar el mundo con acuarelas de complicidad.", // Día 206  
    "Eres mi contraseña maestra para desbloquear la felicidad.", // Día 207  
    "Contigo hasta que los acertijos del universo se resuelvan.", // Día 208  
    "Tu risa es mi melodía en la banda sonora de la vida.", // Día 209  
    "Eres mi mapa estelar para navegar por el caos.", // Día 210  
    "Amar es compartir el último trozo de pizza cósmica.", // Día 211  
    "Eres mi algoritmo genético de compatibilidad perfecta.", // Día 212  
    "Contigo hasta que las libélulas dejen de dibujar el aire.", // Día 213  
    "Tu amor es mi laboratorio de experimentos felices.", // Día 214  
    "Eres mi sesión de spa mental después del caos diario.", // Día 215  
    "Amar es tejer una bufanda con hilos de momentos compartidos.", // Día 216  
    "Eres mi paréntesis en medio de las oraciones urgentes.", // Día 217  
    "Contigo hasta que los diccionarios olviden la palabra 'adiós'.", // Día 218  
    "Tu amor es mi dron que explora paisajes emocionales.", // Día 219  
    "Eres mi filtro de realidad que mejora cada instante.", // Día 220  
    "Amar es plantar un bosque de recuerdos juntos.", // Día 221  
    "Eres mi traductor simultáneo de miradas cómplices.", // Día 222  
    "Contigo hasta que los arcoíris pierdan sus colores.", // Día 223  
    "Tu amor es mi impresora 3D de momentos perfectos.", // Día 224  
    "Eres el emoji que falta en todos los teclados.", // Día 225  
    "Amar es compartir el control de la nave interestelar.", // Día 226  
    "Eres mi efecto mariposa que cambió mi destino.", // Día 227  
    "Contigo hasta que los girasoles dejen de seguir al sol.", // Día 228  
    "Tu amor es mi realidad virtual preferida.", // Día 229  
    "Eres mi llave maestra para candados emocionales.", // Día 230  
    "Amar es mezclar nuestras paletas de acuarela vital.", // Día 231  
    "Eres mi captcha que siempre verifica 'no soy un robot'.", // Día 232  
    "Contigo hasta que los fractales pierdan sus patrones.", // Día 233  
    "Tu amor es mi laboratorio alquímico de sonrisas.", // Día 234  
    "Eres mi plugin que optimiza el rendimiento cardíaco.", // Día 235  
    "Amar es programar un bucle infinito de ternura.", // Día 236  
    "Eres mi telescopio Hubble para ver el alma.", // Día 237  
    "Contigo hasta que las ecuaciones difíciles se resuelvan solas.", // Día 238  
    "Tu amor es mi termostato emocional perfecto.", // Día 239  
    "Eres mi sesión de yoga para el espíritu.", // Día 240  
    "Amar es compartir el meme interno que solo nosotros entendemos.", // Día 241  
    "Eres mi buscador predeterminado de soluciones.", // Día 242  
    "Contigo hasta que los susurros del viento callen.", // Día 243  
    "Tu amor es mi asistente virtual de optimismo.", // Día 244  
    "Eres mi pincelada de óleo en un mundo de acrílicos.", // Día 245  
    "Amar es descifrar jeroglíficos en tu piel.", // Día 246  
    "Eres mi mapa de metro hacia la paz interior.", // Día 247  
    "Contigo hasta que las mariposas monarca pierdan su rumbo.", // Día 248  
    "Tu amor es mi generador de contraseñas seguras al corazón.", // Día 249  
    "Eres mi terapia de shock contra la monotonía.", // Día 250  
    "Amar es construir un puente colgante entre almas.", // Día 251  
    "Eres mi tour guiado por las galaxias interiores.", // Día 252  
    "Contigo hasta que los bonsáis crezcan hasta el cielo.", // Día 253  
    "Tu amor es mi archivo .ZIP de recuerdos felices.", // Día 254  
    "Eres mi sesión de desfragmentación emocional.", // Día 255  
    "Amar es compartir el código fuente de nuestra conexión.", // Día 256  
    "Eres mi escáner que detecta las necesidades del alma.", // Día 257  
    "Contigo hasta que las olas esculpan diamantes en la arena.", // Día 258  
    "Tu amor es mi podcast favorito de susurros nocturnos.", // Día 259  
    "Eres mi receta secreta contra la entropía emocional.", // Día 260  
    "Amar es navegar por tu biografía como si fuera la mía.", // Día 261  
    "Eres mi galería de arte donde cada obra es un 'nosotros'.", // Día 262  
    "Contigo hasta que los copos de nieve firmen tratados de paz.", // Día 263  
    "Tu amor es mi festival de cine de películas sin final.", // Día 264  
    "Eres mi crucigrama que siempre tiene solución.", // Día 265  
    "Amar es compartir el mismo idioma en países diferentes.", // Día 266  
    "Eres mi auricular inalámbrico de pensamientos compartidos.", // Día 267  
    "Contigo hasta que los relojes de arena se conviertan en diamantes.", // Día 268  
    "Tu amor es mi laboratorio de física cuántica emocional.", // Día 269  
    "Eres mi interruptor que ilumina los días oscuros.", // Día 270  
    "Amar es bailar salsa en la cocina a las 3 AM.", // Día 271  
    "Eres mi traje de astronauta para explorar emociones.", // Día 272  
    "Contigo hasta que los volcanes escriban poesía.", // Día 273  
    "Tu amor es mi refugio zombie apocalíptico.", // Día 274  
    "Eres mi sesión de terapia retail sin necesidad de comprar.", // Día 275  
    "Amar es encontrar WiFi gratis en el desierto.", // Día 276  
    "Eres mi directorio raíz de prioridades vitales.", // Día 277  
    "Contigo hasta que los unicornios firmen autógrafos.", // Día 278  
    "Tu amor es mi festival de luciérnagas en verano.", // Día 279  
    "Eres mi máquina del tiempo hacia el futuro perfecto.", // Día 280  
    "Amar es compartir los auriculares en viajes largos.", // Día 281  
    "Eres mi guía de supervivencia para Mondays difíciles.", // Día 282  
    "Contigo hasta que los cactus florezcan en inglés.", // Día 283  
    "Tu amor es mi videojuego de cooperativo infinito.", // Día 284  
    "Eres mi recuerdo de infancia que nunca existió... hasta ahora.", // Día 285  
    "Amar es construir un fuerte con sábanas y almohadas.", // Día 286  
    "Eres mi efecto placebo que cura todo mal.", // Día 287  
    "Contigo hasta que los espejos muestren nuestro futuro.", // Día 288  
    "Tu amor es mi catálogo IKEA de soluciones prácticas.", // Día 289  
    "Eres mi sesión de ASMR contra el estrés mundial.", // Día 290  
    "Amar es compartir el último cuadro de chocolate.", // Día 291  
    "Eres mi GPS para esquivar los baches emocionales.", // Día 292  
    "Contigo hasta que las nubes formen nuestro nombre.", // Día 293  
    "Tu amor es mi poción mágica de resiliencia.", // Día 294  
    "Eres mi escape room donde siempre quiero quedarme.", // Día 295  
    "Amar es compartir los datos sin tarifa de roaming.", // Día 296  
    "Eres mi influencer de buenos hábitos emocionales.", // Día 297  
    "Contigo hasta que los teclados toquen sonatas.", // Día 298  
    "Tu amor es mi clase magistral de paciencia infinita.", // Día 299  
    "Eres mi modo incógnito para guardar secretos dulces.", // Día 300  
    "Eres mi constelación personal en el mapa celeste.", // Día 301  
    "Amar es mezclar nuestras canciones en un mismo playlist.", // Día 302  
    "Contigo hasta que los semáforos canten ópera.", // Día 303  
    "Tu amor es mi traducción simultánea de suspiros.", // Día 304  
    "Eres mi cuaderno de bocetos lleno de 'nosotros'.", // Día 305  
    "Amar es compartir el silencio entre dos paradas de metro.", // Día 306  
    "Eres mi algoritmo que predice sonrisas.", // Día 307  
    "Contigo hasta que las libélulas tejan guirnaldas de aire.", // Día 308  
    "Tu amor es mi festival de cine mudo que habla con miradas.", // Día 309  
    "Eres mi cafetera expresso de energía matutina.", // Día 310  
    "Amar es encontrar tu nombre en todas mis canciones.", // Día 311  
    "Eres mi efecto dominó de buenas decisiones.", // Día 312  
    "Contigo hasta que los museos exhiban nuestros mensajes de texto.", // Día 313  
    "Tu amor es mi termómetro que siempre marca 'calidez'.", // Día 314  
    "Eres mi sesión de speedrun para conquistar el día.", // Día 315  
    "Amar es programar alarmas para recordar por qué te amo.", // Día 316  
    "Eres mi fractal que se repite en cada detalle perfecto.", // Día 317  
    "Contigo hasta que los post-it florezcan en los frigoríficos.", // Día 318  
    "Tu amor es mi diente de león sembrando esperanzas.", // Día 319  
    "Muchas felicidades mi reina, te amo", // Día 320  
    "Amar es compartir el control remoto de las estaciones.", // Día 321  
    "Eres mi huella dactilar en cada molécula de aire.", // Día 322  
    "Contigo hasta que los susurros tengan eco en la luna.", // Día 323  
    "Tu amor es mi brújula desimantada que siempre te encuentra.", // Día 324  
    "Eres mi ecuación diferencial de solución amorosa.", // Día 325  
    "Amar es coleccionar instantes como sellos postales.", // Día 326  
    "Eres mi sinapsis neuronal que activa la creatividad.", // Día 327  
    "Contigo hasta que los paraguas aprendan a volar.", // Día 328  
    "Tu amor es mi arqueología de gestos memorables.", // Día 329  
    "Eres mi acordeón que convierte el caos en melodía.", // Día 330  
    "Amar es navegar tu laberinto y encontrar siempre el centro.", // Día 331  
    "Eres mi origami emocional que nunca se desdobla.", // Día 332  
    "Contigo hasta que las sombras hagan stand-up comedy.", // Día 333  
    "Tu amor es mi arquitectura de abrazos a prueba de terremotos.", // Día 334  
    "Eres mi glosario de palabras que solo existen para nosotros.", // Día 335  
    "Amar es compartir la última galaxia en oferta.", // Día 336  
    "Eres mi ex libris en el libro de la existencia.", // Día 337  
    "Contigo hasta que los asteroides firmen autógrafos.", // Día 338  
    "Tu amor es mi arpa eólica que canta con tu aliento.", // Día 339  
    "Eres mi cafetería de abrazos las 24 horas.", // Día 340  
    "Amar es construir LEGOs emocionales bajo la lluvia.", // Día 341  
    "Eres mi coreografía espontánea en medio del supermercado.", // Día 342  
    "Contigo hasta que los relojes cucú aprendan rap.", // Día 343  
    "Tu amor es mi museo de instantes con entrada gratuita.", // Día 344  
    "Eres mi efecto especial favorito en la película diaria.", // Día 345  
    "Amar es compartir el meme interno que nadie más entiende.", // Día 346  
    "Eres mi catálogo de susurros en oferta 2x1.", // Día 347  
    "Contigo hasta que las plantas desarrollen Tinder.", // Día 348  
    "Tu amor es mi idioma inventado que solo hablamos nosotros.", // Día 349  
    "Eres mi código Morse transmitido por el latir del corazón.", // Día 350  
    "Amar es hacer screenshot a los atardeceres compartidos.", // Día 351  
    "Eres mi crucigrama que se resuelve con besos.", // Día 352  
    "Contigo hasta que las nubes hagan streaming de nuestro amor.", // Día 353  
    "Tu amor es mi festival de food trucks emocionales.", // Día 354  
    "Eres mi tour virtual por las estrellas desde nuestro balcón.", // Día 355  
    "Amar es compartir el último capítulo sin spoilearse.", // Día 356  
    "Eres mi suscripción premium a la felicidad.", // Día 357  
    "Contigo hasta que los emoticonos evolucionen a hologramas.", // Día 358  
    "Tu amor es mi algoritmo de recomendaciones perfecto.", // Día 359  
    "Eres mi contrato vitalicio de complicidad.", // Día 360  
    "Amar es guardar tu foto en la memoria caché del alma.", // Día 361  
    "Eres mi idioma de programación que compila sonrisas.", // Día 362  
    "Contigo hasta que los robots escriban poemas de amor.", // Día 363  
    "Tu amor es mi wifi que nunca pide contraseña.", // Día 364  
    "Eres mi eterno CTRL+S para no perder ningún momento.", // Día 365  
];

const fecha = new Date();
const inicioAno = new Date(fecha.getFullYear(), 0, 0); // 31 de diciembre del año anterior
const diferencia = fecha - inicioAno;
const unDia = 1000 * 60 * 60 * 24; // Milisegundos en un día
const diaDelAno = Math.floor(diferencia / unDia); // 1 - 365 (o 366 en año bisiesto)

let frasesDelHistorial = '';
for (let i = 0; i < 10; i++) {
    const diaHistorial = (diaDelAno - 1 - i + frases.length) % frases.length;
    frasesDelHistorial += frases[diaHistorial] + '\n'; // Agrega cada frase al historial
}

document.getElementById('fraseDelDia').innerText = frasesDelHistorial;
