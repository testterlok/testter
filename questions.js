const questions = [

{q:"Joomla конфигурациясына қай файл жауапты?",a:["configuration.txt","config.php","configuration.php","settings.php","site_config.php"],correct:2},
{q:"Joomla-да мазмұнды құру және басқару үшін қандай компонент қолданылады?",a:["Article Manager","Module Manager","Plugin Manager","User Manager","Media Manager"],correct:0},
{q:"Joomla модулі дегеніміз не?",a:["функционалдылықты өзгертуге арналған қосымша","пайдаланушы интерфейсінің элементі","пайдаланушыны басқару құралы","медиа файлдарды басқару қызметі","мәзірді басқару құралы"],correct:1},
{q:"Joomla-дағы кеңейтімдердің қай түрі сайтқа жаңа функционалдылықты қосуға мүмкіндік береді?",a:["Компоненттер","Шаблондар","Модульдер","Плагиндер","Кітапханалар"],correct:0},
{q:"Joomla жүйесінде кеңейтімдерді орнату үшін қандай әдіс қолданылады?",a:["FTP","URL","Пакеттік файл","SSH","API"],correct:2},
{q:"Joomla үлгісіндегі қай файл CSS мәнерлеріне жауап береді?",a:["style.css","template.css","theme.css","main.css","design.css"],correct:1},
{q:"Мультимедианы басқару үшін қандай Joomla құралы пайдаланылады?",a:["Article Manager","Media Manager","Module Manager","Plugin Manager","Template Manager"],correct:1},
{q:"Joomla жүйесіне енгізілген нұсқаны басқару жүйесі қалай аталады?",a:["Git","Subversion","Version Control System","Joomla Version Control","Track Changes"],correct:1},
{q:"Joomla-ның қай нұсқасы MVC қолдауын алғаш рет енгізді?",a:["1.0","1.5","2.5","3.0","3.5"],correct:1},
{q:"Joomla шаблондарын жасау үшін қай тіл қолданылады?",a:["HTML және CSS","PHP және HTML","JavaScript және HTML","Python және HTML","Ruby және HTML"],correct:1},

{q:"Төменде келтірілген мәзір түрлерінің қайсысы Joomla-да жоқ?",a:["Single Article","Category Blog","Category List","Front Page","External URL"],correct:3},
{q:"Joomla мақалалары қайда сақталады?",a:["модульдерде","плагиндерде","компоненттерде","мәліметтер базасында","конфигурация файлдарында"],correct:3},
{q:"Joomla-ны жаңа нұсқаға жаңарту процесі қалай аталады?",a:["Upgrade","Update","Refresh","Reload","Patch"],correct:1},
{q:"Joomla-да суреттерді сақтау үшін қандай деректер түрі қолданылады?",a:["мәліметтер базасы","сервердегі файлдар","мәтіндік файлдар","XML файлдары","JSON файлдары"],correct:1},
{q:"Төмендегілердің қайсысы Joomla-дағы стандартты модуль емес?",a:["Menu","Login Form","Latest Articles","Weather Forecast","Breadcrumbs"],correct:3},
{q:"Joomla 4 үшін PHP минималды нұсқа?",a:["5.6","7.2.5","7.4","8.0","8.1"],correct:1},
{q:"Joomla-да пайдаланушыларды басқару үшін қандай компонент қолданылады?",a:["Article Manager","Module Manager","User Manager","Plugin Manager","Media Manager"],correct:2},
{q:"Қандай кеңейтім пішін жасауға мүмкіндік береді?",a:["Form Creator","Form Builder","RSForm! Pro","Contact Form Manager","Form Manager"],correct:2},
{q:"Сақтық көшірме жасау кеңейтімі?",a:["Backup Wizard","Backup Master","Akeeba Backup","Site Saver","Joomla Backup"],correct:2},
{q:"Template құрылымы қалай аталады?",a:["theme","template","style","design","layout"],correct:1},

{q:"Модульдерді көрсету ретін өзгерту?",a:["Publish Order","Display Sequence","Ordering","Sorting","Arrangement"],correct:2},
{q:"Email жіберу компоненті?",a:["Mail Sender","Mass Mail","Email Manager","SMTP Client","Mail Client"],correct:1},
{q:"Іздеу жүйесіне енгізу процесі?",a:["SEO","Indexing","Submission","Meta","Mapping"],correct:1},
{q:"DB конфигурация файлы?",a:["settings.php","configuration.php","db_config.php","database.php","sql_config.php"],correct:1},
{q:"Menu жасау құралы?",a:["Menu Builder","Menu Manager","Navigation Creator","Menu Organizer","Menu Designer"],correct:1},
{q:"ACL деген не?",a:["Automatic Content Loader","Access Control List","Advanced Content Library","Access Config","Logic"],correct:1},
{q:"HTTP протоколы?",a:["HTTP/1.0","HTTP/1.1","FTP","SSH","SFTP"],correct:1},
{q:"Орнату файлы?",a:["install.php","setup.php","installation.php","index.php","start.php"],correct:3},
{q:"CMS деген не?",a:["Publication","CMS","Publishing","Management","Content"],correct:1},

// Drupal
{q:"Drupal деген не?",a:["ОЖ","CMS","Тіл","Браузер","Дерекқор"],correct:1},
{q:"Drupal қай тілде?",a:["Java","Python","PHP","C#","Ruby"],correct:2},
{q:"View деген?",a:["Дерекқор","Көрсету құралы","Плагин","Сервер","Блок"],correct:1},
{q:"Ядро?",a:["Engine","Core","Base","Kernel","System"],correct:1},
{q:"Қосымша функция?",a:["Plugins","Modules","Scripts","Themes","Widgets"],correct:1},
{q:"Дизайн?",a:["Template","Style","Theme","Layout","Skin"],correct:2},
{q:"Role?",a:["Group","Role","Level","Type","Class"],correct:1},
{q:"Құқық?",a:["ACL","Permissions","Access","Security","Manager"],correct:2},
{q:"Лицензия?",a:["MIT","GPL","Apache","BSD","Commercial"],correct:1},
{q:"Дерек қайда?",a:["Файл","XML","DB","JSON","Cache"],correct:2},
{q:"Block?",a:["Код","Контент бөлігі","Плагин","Файл","Сервер"],correct:1},
{q:"Menu жүйесі?",a:["Navigation","Menu system","Link","Path","Page"],correct:1},
{q:"Кеңейтім?",a:["Extensions","Modules","Plugins","Addons","Tools"],correct:1},
{q:"Media?",a:["File manager","Media","Upload","Asset","Storage"],correct:1},
{q:"Мақсаты?",a:["Ойын","CMS","ОЖ","Антивирус","DB"],correct:1},
{q:"URL жүйе?",a:["Path","Link","Route","Address","SEO"],correct:0},
{q:"Контент?",a:["Types","Content types","Nodes","Pages","Blocks"],correct:2},
{q:"Search?",a:["Жоқ","Иә","Сыртқы","API","Plugin"],correct:1},
{q:"User tool?",a:["User manager","Account","Role","User module","Access"],correct:3},
{q:"Cache?",a:["Дизайн","Жылдамдық","Файл","Mail","Block"],correct:1}

// =====================
// CMS ҚАУІПСІЗДІК (51–100)
// =====================

{q:"CMS жүйелеріндегі ең кең таралған шабуыл түрі қандай?",a:["CSS Injection","SQL Injection","Image attack","Font attack","Cache overflow"],correct:1},
{q:"XSS шабуылының мақсаты?",a:["Серверді өшіру","Зиянды JavaScript енгізу","DB жою","Плагин орнату","SSL бұзу"],correct:1},
{q:"WordPress-та қауіпсіздік үшін маңызды файл?",a:["wp-config.php","style.css","index.php","plugin.php","media.php"],correct:0},
{q:"Drupal қауіпсіздік жаңартулары қалай таратылады?",a:["Email","GitHub","Security advisories","FTP","Forum"],correct:2},
{q:"Joomla admin қорғау әдісі?",a:["CSS өзгерту","SQL өзгерту","Plugin өшіру","Media жою","2FA + Admin URL қорғау"],correct:4},

{q:"Least Privilege принципі?",a:["Барлығына толық құқық","Тек қажетті құқық","Тек admin","Плагин өшіру","Парольсіз кіру"],correct:1},
{q:"Wordfence не істейді?",a:["SEO","Media","Design","Firewall","User add"],correct:3},
{q:"Drupal update жоқ болса не болады?",a:["Дизайн бұзылады","Қауіпсіздік осалдықтары","Жылдамдайды","Media жойылады","SEO өседі"],correct:1},
{q:"Joomla extensions?",a:["CSS","Функция модульдері","DB","Server","URL"],correct:1},
{q:"HTTPS мақсаты?",a:["Шифрлау","Жылдамдату","Plugin","CSS","SQL"],correct:0},

{q:"Brute force қарсы?",a:["CSS filter","Login limit","Image optimize","Cache","HTML"],correct:1},
{q:"Login қорғау әдісі?",a:["URL change","Theme","CSS","Media","SQL"],correct:0},
{q:"Drupal permissions?",a:["Design","Access control","Plugin","CSS","Media"],correct:1},
{q:"Joomla ACL?",a:["CSS","Server","User rights system","SQL","Plugin"],correct:2},
{q:"Malware деген?",a:["Design","URL","Plugin","CSS","Зиянды бағдарлама"],correct:4},

{q:"File permissions мақсаты?",a:["SEO","Design","Access restriction","Plugin","Server off"],correct:2},
{q:"Backup мақсаты?",a:["Design","Restore","CSS","Plugin","URL"],correct:1},
{q:"Security plugin?",a:["Protection system","Design","Media","CSS","SQL"],correct:0},
{q:"XSS қорғау?",a:["sanitize","CSS","Image","Cache","Theme"],correct:0},
{q:"Audit деген?",a:["Design","Security check","Plugin","CSS","Media"],correct:1},

{q:"CSRF мақсаты?",a:["Server off","SQL change","User action","CSS","Media"],correct:2},
{q:"SALT keys қайда?",a:["functions.php","wp-content","wp-config.php","index.php","style.css"],correct:2},
{q:"2FA Joomla не береді?",a:["Design","Extra security","CSS","Media","SEO"],correct:1},
{q:"Trusted hosts?",a:["CSS","Allowed domains","Plugin","Media","SQL"],correct:1},
{q:"Brute force белгісі?",a:["CSS","SEO drop","Media","Design","Many login attempts"],correct:4},

{q:"XML-RPC өшіру?",a:["SEO","Media","CSS","Brute force protection","Theme"],correct:3},
{q:"HTTPS жоқ болса?",a:["CSS","Data leak","Plugin","Theme","Media"],correct:1},
{q:"Admin change?",a:["Security increase","Design","SEO","Media","CSS"],correct:0},
{q:"DISALLOW_FILE_EDIT?",a:["true","false","remove","block","lock"],correct:0},
{q:"Drupal watchdog?",a:["CSS","Logs","Plugin","Media","Theme"],correct:1},

{q:"Spam қорғау?",a:["CSS","SQL","Theme","Media","CAPTCHA"],correct:4},
{q:"Admin user қауіпті?",a:["Design","Easy guess","SEO","Media","CSS"],correct:1},
{q:"Extensions қайда орнатылады?",a:["FTP","Admin panel","CSS","SQL","HTML"],correct:1},
{q:"Secure password?",a:["4","6","8","12+","3"],correct:3},
{q:"Debug production?",a:["No risk","Yes info leak","CSS only","Media","Theme"],correct:1},

{q:"Update manager?",a:["CSS","Checks updates","Media","Theme","SQL"],correct:1},
{q:"Phishing?",a:["CSS","Fake site","Media","Theme","SQL"],correct:1},
{q:"Plugin update?",a:["Design","Theme","CSS","Media","Security"],correct:4},
{q:"Login form protection?",a:["CSS","CAPTCHA","Media","Theme","SQL"],correct:1},
{q:"Security Kit?",a:["Views","Security module","Media","Theme","Cache"],correct:1},

{q:"Logs не үшін?",a:["Design","CSS","Monitoring","Media","Theme"],correct:2},
{q:"Admin Tools?",a:["Joomla security","Design","Media","Theme","SQL"],correct:0},
{q:"Uploads protection?",a:["Block malware","Design","CSS","Theme","SQL"],correct:0},
{q:"User roles?",a:["CSS","Permissions","Media","Theme","SQL"],correct:1},
{q:"HTTPS port?",a:["21","80","443","25","110"],correct:2},

{q:"Backup тек DB ме?",a:["Yes","No","CSS","Media","Theme"],correct:1},
{q:"Admin folder protection?",a:["CSS","Password + IP","Media","Theme","SQL"],correct:1},
{q:"Cache clear?",a:["Design","Media","CSS","After update fix","Theme"],correct:3},
{q:"wp-admin change?",a:["Security increase","Design","SEO","Media","CSS"],correct:0},

// WordPress
{q:"WordPress тілі?",a:["Java","Python","Ruby","PHP","HTML"],correct:3},
{q:"WordPress CMS па?",a:["Yes","No","Engine","DB","OS"],correct:0},
{q:"Akismet не керек?",a:["API key","CSS","Theme","DB","Media"],correct:0},
{q:"WordPress.com vs .org?",a:["Same","Hosting vs software","DB","CSS","Plugin"],correct:1},
{q:"Themes қайда?",a:["Appearance","Settings","Tools","Users","Posts"],correct:0}

// =====================
// WORDPRESS / CMS (101–139)
// =====================

{q:"WordPress-та автор максималды саны?",a:["10","1","Шексіз","2","5"],correct:2},
{q:"WordPress-та тақырыпты қайдан өзгертеді?",a:["Settings","Tools","Appearance","Users","Posts"],correct:2},
{q:"WPINC не сақтайды?",a:["Core path","CSS","DB","Media","Plugin"],correct:0},
{q:"Плагин қосу әдісі?",a:["FTP","Plugins → Add New","CSS","SQL","HTML"],correct:1},
{q:"posts_per_page не істейді?",a:["DB","Pagination","CSS","Media","Theme"],correct:1},

{q:"Transient API не үшін?",a:["CSS","Temporary cache","Plugin","Media","User"],correct:1},
{q:"is_super_admin() не?",a:["User check","CSS","DB","Media","Plugin"],correct:0},
{q:"Widget не істейді?",a:["Sidebar content","DB","CSS","Plugin","Server"],correct:0},
{q:"Multisite-те қай медиа болмайды?",a:["png","gif","bmp","jpg","jpeg"],correct:2},
{q:"Widget қосу әдісі?",a:["Appearance → Widgets","FTP","SQL","CSS","DB"],correct:0},

{q:"WordPress рольі автор не істейді?",a:["Admin","Post publish","CSS","DB","Plugin"],correct:1},
{q:"Themes саны?",a:["1","Шексіз","2","10","5"],correct:1},
{q:"Menu қалай жасалады?",a:["Pages+Categories+Links","CSS","DB","Plugin","Server"],correct:0},
{q:"wp_postmeta не сақтайды?",a:["Custom fields","CSS","DB core","Media","Plugin"],correct:0},
{q:"Akismet талап?",a:["API key","CSS","Theme","DB","Media"],correct:0},

{q:"WordPress түрі?",a:["CMS","OS","DB","Browser","Language"],correct:0},
{q:"Widget не?",a:["Sidebar block","DB","CSS","Plugin","Server"],correct:0},
{q:"Media type not allowed?",a:["png","gif","bmp","jpg","jpeg"],correct:2},
{q:"Redirect function?",a:["wp_redirect","redirect","go","move","link"],correct:0},
{q:"$wpdb не?",a:["DB access","CSS","Plugin","Media","Theme"],correct:0},

{q:"prepare() не үшін?",a:["SQL protection","CSS","Media","Plugin","Theme"],correct:0},
{q:"Plugin кейін не?",a:["Activate","Delete","CSS","DB","Restart"],correct:0},
{q:"admin login?",a:["/wp-admin","/login","/admin","/panel","/site"],correct:0},
{q:"Plugin мақсаты?",a:["Extend features","CSS","DB","Media","Theme"],correct:0},
{q:"Author role?",a:["Write posts","Admin","CSS","DB","Plugin"],correct:0},

{q:"Menu function?",a:["add_menu_page()","menu_add()","create_menu()","set_menu()","wp_menu()"],correct:0},
{q:"DB rights?",a:["select insert update delete","CSS","Media","Theme","Plugin"],correct:0},
{q:"Multilingual plugin?",a:["qTranslate","Cache","SEO","Backup","Firewall"],correct:0},
{q:"User roles count?",a:["5","3","6","7","4"],correct:2},
{q:"Migration fastest?",a:["Plugin","Manual install","XML only","Theme copy","CSS copy"],correct:0},

{q:"Default DB?",a:["MySQL","MongoDB","Oracle","PostgreSQL","SQLite"],correct:0},
{q:"Subscriber role?",a:["Profile only","Admin","Editor","Author","CSS"],correct:0},
{q:"get_the_title()?",a:["Get post title","DB","CSS","Plugin","Media"],correct:0},
{q:"SEO permalink method?",a:["Settings → Permalinks","CSS","DB","Plugin","Theme"],correct:0},
{q:"Editor role?",a:["Full content control","CSS","DB","Plugin","Media"],correct:0},

{q:"Menu consists of?",a:["Pages posts categories links","CSS","DB","Plugin","Theme"],correct:0},
{q:"wp_postmeta table?",a:["Custom fields","DB core","CSS","Media","Plugin"],correct:0},

// Joomla duplicate safeguard questions (finish 139)
{q:"CMS деген не?",a:["Content Management System","Coding tool","Server OS","Database","Browser"],correct:0},
{q:"Joomla ACL не?",a:["Access control system","CSS","DB","Plugin","Theme"],correct:0},
{q:"SEO мақсаты?",a:["Ranking","Design","DB","Plugin","Media"],correct:0},

{q:"HTTPS не үшін?",a:["Encryption","Speed","CSS","Theme","Plugin"],correct:0},
{q:"Backup не үшін?",a:["Restore data","Design","CSS","Plugin","Theme"],correct:0},
{q:"Cache не істейді?",a:["Speed increase","DB delete","CSS","Media","Plugin"],correct:0},

{q:"SQL Injection?",a:["DB attack","CSS","Theme","Media","Plugin"],correct:0},
{q:"XSS?",a:["JS injection","DB delete","CSS","Media","Plugin"],correct:0},
{q:"Firewall?",a:["Protection","Design","DB","Theme","Media"],correct:0},

{q:"CAPTCHA?",a:["Bot protection","CSS","DB","Media","Theme"],correct:0},
{q:"2FA?",a:["Extra security","CSS","DB","Media","Theme"],correct:0}

];
