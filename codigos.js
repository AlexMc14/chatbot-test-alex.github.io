const data = [
    {
        "tag": "LISTAR_CONTROLADORES_GENERICO",
        "patterns": [
            "controladores"
        ],
        "responses": [
            "mysql -u root -p; <br> contraseña <br> use brooklyn; <br> select * from bags order by bag_number asc; <br> <br> Si quieres listar controladores en pantallas pequeñas: <br> select id, ip, mac, bag_number, center_id, created_at, updated_at from bags order by bag_number asc;"
        ]
    },
    {
        "tag": "LISTAR_CONTROLADORES_PANTALLAS_PEQUENAS",
        "patterns": [
            "pantallas pequeñas",
            "controladores pantallas pequeñas"
        ],
        "responses": [
            "select id, ip, mac, bag_number, center_id, created_at, updated_at from bags order by bag_number asc;"
        ]
    },
    {
        "tag": "QUITAR_SACOS_DUPLICADOS",
        "patterns": [
            "sacos duplicados"
        ],
        "responses": [
            "delete from bags where ip = '' and mac ='' and center_id=1; <br> delete from bags where ip ='' and mac ='' and center_id=2;"
        ]
    },
    {
        "tag": "ACCEDER_A_CONTROLADOR",
        "patterns": [
            "controlador"
        ],
        "responses": [
            "ssh <IP> -l root"
        ]
    },
    {
        "tag": "USO_DE_DISCO_CONTROLADOR",
        "patterns": [
            "uso disco controlador",
            "rendimiento disco controlador"
        ],
        "responses": [
            "iostat -d -k -x 1"
        ]
    },
    {
        "tag": "TEST_SENSOR",
        "patterns": [
            "sensor"
        ],
        "responses": [
            "curl :667/test_controller <br> curl :666"
        ]
    },
    {
        "tag": "REINICIAR_POE",
        "patterns": [
            "poe"
        ],
        "responses": [
            "cd /var/www/playserver/scripts <br> sudo python3 reboot_all.py"
        ]
    },
    {
        "tag": "REINICIAR_MYSQL",
        "patterns": [
            "mysql"
        ],
        "responses": [
            "sudo service mysql restart"
        ]
    },
    {
        "tag": "PM2_STATUS",
        "patterns": [
            "pm2 status",
            "estado pm2"
        ],
        "responses": [
            "pm2 ps"
        ]
    },
    {
        "tag": "PM2_LOG",
        "patterns": [
            "pm2 log",
            "pm2 logs"
        ],
        "responses": [
            "cd /home/minipc/.pm2/logs/ <br> cat playbrooklyn-server-out.log"
        ]
    },
    {
        "tag": "PM2_RESTART",
        "patterns": [
            "pm2 restart",
            "reiniciar pm2"
        ],
        "responses": [
            "pm2 restart"
        ]
    },
    {
        "tag": "PM2_PRODUCCION",
        "patterns": [
            "pm2 production",
            "produccion pm2",
            "pm2 produccion"
        ],
        "responses": [
            "cd /home/minipc/playbrooklyn-server <br> pm2 reload ecosystem.config.js --env=production <br> pm2 save"
        ]
    },
    {
        "tag": "INFO_PC",
        "patterns": [
            "info pc",
            "informacion ordenador"
        ],
        "responses": [
            "sudo lshw",
            "cat /proc/cpuinfo"
        ]
    },
    {
        "tag": "PARTICIONES",
        "patterns": [
            "particiones"
        ],
        "responses": [
            "sudo fdisk -l"
        ]
    },
    {
        "tag": "SYSLOG",
        "patterns": [
            "SYSLOG"
        ],
        "responses": [
            "cat /var/log/syslog"
        ]
    },
    {
        "tag": "NETSTAT",
        "patterns": [
            "NETSTAT"
        ],
        "responses": [
            "sudo netstat -an | grep -i established"
        ]
    },
    {
        "tag": "SOMAXCONN",
        "patterns": [
            "SOMAXCONN"
        ],
        "responses": [
            "cat /proc/sys/net/core/somaxconn"
        ]
    },
    {
        "tag": "NETSTAT_LISTA_TODOS",
        "patterns": [
            "NETSTAT todos"
        ],
        "responses": [
            "netstat -nat"
        ]
    },
    {
        "tag": "ACTUALIZAR_LLAVE_BITBUCKET",
        "patterns": [
            "llave Bitbucket"
        ],
        "responses": [
            "curl http://vpn.yustplayit.com/pb/known_hosts > /home/minipc/.ssh/known_hosts <br> sudo -u root < /home/minipc/.ssh/known_hosts sh -c 'cat > /root/.ssh/known_hosts'"
        ]
    },
    {
        "tag": "COMPROBAR_VERSION_CONTROLADOR",
        "patterns": [
            "version controlador",
            "versión controlador"
        ],
        "responses": [
            "ls -la ../bags_firmware_zips/"
        ]
    },
    {
        "tag": "ACTUALIZAR_VERSION_CONTROLADOR",
        "patterns": [
            "Actualizar version controlador",
            "Refrescar version controlador"
        ],
        "responses": [
            "cd /var/www/playserver/scripts/ <br> sudo ./update_bags_firmware.sh <br> python3 review_existing_bags.py log"
        ]
    },
    {
        "tag": "ACTUALIZAR_VERSION_BACKEND",
        "patterns": [
            "Actualizar version backend",
            "Refrescar version backend",
            "Actualizar version back",
            "Refrescar version back"
        ],
        "responses": [
            "curl -sL http://pro.play.brooklynfitboxing.com:81/pb/update_backend.sh | sudo bash"
        ]
    },
    {
        "tag": "ACTUALIZAR_VERSION_FRONTEND",
        "patterns": [
            "Actualizar version frontend",
            "Refrescar version frontend",
            "Actualizar version front",
            "Refrescar version front"
        ],
        "responses": [
            "curl -sL http://pro.play.brooklynfitboxing.com:81/pb/update_frontend.sh | sudo bash"
        ]
    },
    {
        "tag": "PHP (Hoja)",
        "patterns": [
            "PHP (Hoja)"
        ],
        "responses": [
            "sudo nano /etc/nginx/sites-available/playbrooklyn"
        ]
    },
    {
        "tag": "PHP (Reiniciar Nginx)",
        "patterns": [
            "PHP (Reiniciar Nginx)"
        ],
        "responses": [
            "sudo service nginx restart"
        ]
    },
    {
        "tag": "PHP (Versión)",
        "patterns": [
            "PHP (Versión)"
        ],
        "responses": [
            "php -v"
        ]
    },
    {
        "tag": "Conexión a MiniPc por terminal",
        "patterns": [
            "Conexión a MiniPc por terminal"
        ],
        "responses": [
            "assh2 bf <NOMBRE DEL MINIPC>"
        ]
    },
    {
        "tag": "ENTRAR EN MINIPC REMOTO (VNC)",
        "patterns": [
            "ENTRAR EN MINIPC REMOTO (VNC)"
        ],
        "responses": [
            "activar vpn <br> conectarse al minipc por consola y ejecutar:<br> cd /home/minipc<br> ./startvnc start<br> En VCN poner ip del minipc<br> contraseña camaleón!<br> Reiniciar minipc o ejecutar<br> ./startvnc stop<br> <br><br> Reiniciar VNC<br> cd /home/minipc<br> ./startvnc restart<br> Poner navegador con PB a toda pantalla - pulsar F11<br> Para lanzar el terminal en Mac: Control + Comando + T<br> Para lanzar el terminal en Windows: Control + Alt + T <br> Para lanzar Chrome: Desde el terminal google-chrome-stable<br> Iniciar Chrome sin pantalla completa    google-chrome --start-maximized<br>"
        ]
    },
    {
        "tag": "SABER EN QUE MINIPC ESTOY",
        "patterns": [
            "SABER EN QUE MINIPC ESTOY"
        ],
        "responses": [
            "curl localhost:8080/api/centers"
        ]
    },
    {
        "tag": "Ver dispositivos ( conectados ) en una subred",
        "patterns": [
            "Ver dispositivos ( conectados ) en una subred"
        ],
        "responses": [
            "ip a s <br>nmap -sP 192.168.X.0/24 <br>sudo nmap -sn -PR 192.168.1.0/24"
        ]
    },
    {
        "tag": "Ver conexiones activas del Minipc",
        "patterns": [
            "Ver conexiones activas del Minipc"
        ],
        "responses": [
            "sudo netstat -an | grep -i established"
        ]
    },
    {
        "tag": "Informacion Minipc",
        "patterns": [
            "Informacion Minipc"
        ],
        "responses": [
            "sudo lshw"
        ]
    },
    {
        "tag": "Informacion de procesos",
        "patterns": [
            "Informacion de procesos"
        ],
        "responses": [
            "sudo htop"
        ]
    },
    {
        "tag": "Corregir sistema de archivos",
        "patterns": [
            "Corregir sistema de archivos"
        ],
        "responses": [
            "fdisk -l (Ejecutar el comando para conocer la ruta)<br> fsck /dev/sda2 -y  (Ruta de instalacion sda2 o sda3)<br> reboot<br>"
        ]
    },
    {
        "tag": "Error TTY1",
        "patterns": [
            "Error TTY1"
        ],
        "responses": [
            "fsck -f /"
        ]
    },
    {
        "tag": "Error Grub",
        "patterns": [
            "Error Grub"
        ],
        "responses": [
            'ls /boot <br>*En funcion de la version del Kernel y su ubicacion debemos de cambiar abajo "5.15.0-97" y la ruta "/dev/sda" <br>linux /boot/vmlinuz-5.15.0-97-generic root=/dev/sda <br>initrd /boot/initrd.img-5.15.0-97-generic <br>boot'
        ]
    },
    {
        "tag": "Cambiar entorno DEV a PRO",
        "patterns": [
            "Cambiar entorno DEV a PRO"
        ],
        "responses": [
            'Cambiar entorno DEV a PRO <br> acceder a la ruta  /home/minipc/playbrooklyn-server<br> Ejecutar pm2 reload ecosystem.config.js --env=production<br>'
        ]
    },
    {
        "tag": "Activar modo kiosko",
        "patterns": [
            "Activar modo kiosko"
        ],
        "responses": [
            '/var/www/playserver/scripts/run_chrome_in_local.sh'
        ]
    },
    {
        "tag": "Ajuste de sonido",
        "patterns": [
            "Ajuste de sonido"
        ],
        "responses": [
            'alsamixer (se controla con las teclas de dirección)'
        ]
    },
    {
        "tag": "Acceso controlador",
        "patterns": [
            "Acceso controlador"
        ],
        "responses": [
            'ssh <IP> -l root <br> <IP> cambiar por la IP del controlador<br>'
        ]
    },
    {
        "tag": "Mydirector con IP diferente a Mysql",
        "patterns": [
            "Mydirector con IP diferente a Mysql"
        ],
        "responses": [
            'no coincide con la ip del minipc<br> cd /var/www/playserver <br> python3 scripts/syncronizer_deamon.py'
        ]
    },
    {
        "tag": "Version de sensor",
        "patterns": [
            "Version de sensor"
        ],
        "responses": [
            'cd /home/bag <br> python3 sensorDriver.py <br> MPU-6050 (3 años CAMBIAR)'
        ]
    },
    {
        "tag": "Resetear controlador",
        "patterns": [
            "Resetear controlador"
        ],
        "responses": [
            '<br>ssh <ip del controlador> -l root <br>reboot'
        ]
    },
    {
        "tag": "Test de sensor",
        "patterns": [
            "Test de sensor"
        ],
        "responses": [
            'curl :667/test_controller <br>curl :666'
        ]
    },
    {
        "tag": "Test Luz",
        "patterns": [
            "Test Luz "
        ],
        "responses": [
            'http://"IP CENTRO":3001/bags/set_color/"Saco / "ALL" todos "/"COLOR" <br> GOLD GREEN CYAN <br> SILVER BLUE WHITE <br> BRONZE RED PURPLE'
        ]
    },
    {
        "tag": "Controladores duplicados",
        "patterns": [
            "Controladores duplicados "
        ],
        "responses": [
            "(dentro de la BBDD) <br>delete from bags where ip =  '' and mac ='' and center_id=1;"
        ]
    },
    {
        "tag": "Reiniciar controladores del POE",
        "patterns": [
            "Reiniciar controladores del POE"
        ],
        "responses": [
            "cd /var/www/playserver/scripts <br>sudo python3 reboot_all.py"
        ]
    },
    {
        "tag": "FIRMWARE CONTROLADOR Version instalada",
        "patterns": [
            "FIRMWARE CONTROLADOR Version instalada"
        ],
        "responses": [
            "ls -la ../bags_firmware_zips/"
        ]
    },
    {
        "tag": "FIRMWARE CONTROLADOR Actualizar",
        "patterns": [
            "FIRMWARE CONTROLADOR Actualizar"
        ],
        "responses": [
            "cd /var/www/playserver/scripts/ <br>revisa que update_bags_firmware.sh esté en master: nano update_bags_firmware.sh y debería poner dentro “git checkout master” <br>sudo ./update_bags_firmware.sh <br>python3 review_existing_bags.py log"
        ]
    },
    {
        "tag": "VIDEOWALL Configurar Script de arranque resolucion",
        "patterns": [
            "VIDEOWALL Configurar Script de arranque resolucion"
        ],
        "responses": [
            "Ir al directorio: <br>cd /home/minipc/.config/autostart/ <br>crear script set_default_resolution.sh.desktop: <br>nano set_default_resolution.sh.desktop <br>[Desktop Entry] <br>Type=Application <br>Exec=/var/www/playserver/scripts/set_default_resolution.sh <br>Hidden=false <br>NoDisplay=false <br>X-GNOME-Autostart-enabled=true <br>Name[en_US]=Playbrooklyn-Resolution <br>Name=Playbrooklyn-Resolution <br>Comment[en_US]= <br>Comment="
        ]
    },
    {
        "tag": "VIDEOWALL Resolución",
        "patterns": [
            "VIDEOWALL Resolución"
        ],
        "responses": [
            "(el + dice cuál es la recomendada y el * la que tienen puesta) <br>export DISPLAY=:0 <br>xrandr <br>Para cambiarla a la correcta: <br>xrandr -s 1920x1080 -r 30 <br>xrandr -q <br>esto último es para guardarla <br>(el + dice cuál es la recomendada y el * la que tienen puesta)"
        ]
    },
    {
        "tag": "Ver logs PM2",
        "patterns": [
            "Ver logs PM2"
        ],
        "responses": [
            "cd /home/minipc/.pm2/logs/playbooklyn-server-out.log<br> Para descomprimir: gzip -d archivo.gz<br> ---------------------------------------------------------------- <br>cd /home/minipc/.pm2/logs/ <br>cat playbrooklyn-server-out.log"
        ]
    },
    {
        "tag": "Ver logs Sistema",
        "patterns": [
            "Ver logs Sistema"
        ],
        "responses": [
            'cd  cat /var/log/syslog <br>sudo cat /var/log/syslog | grep -i "error" <br>"error" podemos sustituirlo por la palabra de busqueda'
        ]
    },
    {
        "tag": "Ver logs Laravel",
        "patterns": [
            "Ver logs Laravel"
        ],
        "responses": [
            'cd /var/www/playserver/storage/logs/laravel.log'
        ]
    },
    {
        "tag": "Script para solucionar PM2 status errores",
        "patterns": [
            "Script para solucionar PM2 status errores"
        ],
        "responses": [
            'curl http://pro.play.brooklynfitboxing.com:81/pb/update_backend.sh | sudo bash'
        ]
    }
]