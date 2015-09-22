import React from 'react';

const PREFIX = 'icon-';
const ICONS = [
  'grab',
  'back-link-tab',
  'clockwise',
  'counter-clock',
  'cycle',
  'many-way',
  'new-linktab',
  'refresh',
  'square-back',
  'square-close',
  'square-cornerd',
  'square-corneru',
  'square-equals',
  'square-exis',
  'square-left',
  'square-leftline',
  'square-minus',
  'square-plus',
  'square-right',
  'square-rightline',
  'square-ud',
  'tri-cycle',
  'turn-back',
  'turn',
  'u-turn',
  'way-c',
  'way-c2',
  'way-intersect',
  'way-lr',
  'way-y2',
  'arrow-lr',
  'backward2',
  'circular-down',
  'circular-left',
  'circular-right',
  'circular-up',
  'cross-line',
  'down-arrow',
  'download2',
  'forward2',
  'left-arrow',
  'line-2',
  'line-down',
  'line-down2',
  'line-left',
  'line-lr',
  'line-right',
  'line-ud',
  'line-up',
  'line-up2',
  'line-upup',
  'line-y',
  'line1',
  'move-left',
  'move-right',
  'right-arrow',
  'spine-in',
  'swipe-out',
  'up-arrow',
  'upload2',
  'anchor',
  'bike',
  'boat-wheel',
  'bone-dog',
  'bug',
  'butterfly',
  'cactus',
  'carrots',
  'caserole',
  'cat',
  'celcius',
  'done-pawn',
  'drop-water',
  'eye-mask',
  'farenheight',
  'fish',
  'flower',
  'flower2',
  'foot-prints',
  'hot-teacup',
  'icecream',
  'leaves',
  'mug',
  'pine',
  'pizza',
  'snowflake',
  'spoonfork',
  'tree',
  'umbrella',
  'wineglass',
  'cloud-sound',
  'cloud2',
  'cloudy',
  'compass-2',
  'crescent',
  'eclipes-full',
  'eclipes-quart',
  'eclipes-quart2',
  'eclipes',
  'moon-cloud',
  'moon-full',
  'moon-quart',
  'rain',
  'rainbow-cloud',
  'rainbow',
  'rainy',
  'snow',
  'snowy',
  'storm',
  'sun-cloud',
  'sun-light',
  'sun-rain',
  'sunrise',
  'sunset',
  'temperatures',
  'thunder',
  'tornado',
  'typhoon',
  'wind-detect',
  'windy',
  'backward',
  'disc',
  'forward',
  'guitar',
  'ipod',
  'key-note',
  'keyboard',
  'mic-2',
  'mic',
  'music-beats',
  'music-file',
  'music-list',
  'mute',
  'next',
  'note',
  'pause',
  'play',
  'play2',
  'previous',
  'record',
  'repeat',
  'setting-list',
  'settings-2',
  'shuffle',
  'speaker',
  'stop',
  'volume-full',
  'volume-lo',
  'volume-mid',
  'volume-mute',
  'add-cart',
  'atm-cart',
  'bar-code',
  'cart-export',
  'cart-import',
  'cart-wheel',
  'cart',
  'close-box',
  'close-store',
  'delete-cart',
  'deliver',
  'fast-cart',
  'fav-cart',
  'free',
  'gem',
  'loop24',
  'new',
  'open-box',
  'open-store',
  'percent',
  'push-cart',
  'remove-cart',
  'sale',
  'shop-bag-2',
  'shop-bag',
  'shop-minus',
  'shopbag-add',
  'shopbag-close',
  'spacial',
  'store',
  'bat-3',
  'bat-empty',
  'bat-full',
  'bat-half',
  'cloud-add',
  'cloud-down',
  'cloud-fail',
  'cloud-lock',
  'cloud-remove',
  'cloud-up',
  'cloud-wave',
  'cloud',
  'clover-line',
  'crop',
  'diamond-line',
  'dice',
  'expand',
  'heart-line',
  'lo-bat',
  'merge',
  'router',
  'rss',
  'share',
  'signal-wave',
  'spade-line',
  'wave-dot',
  'web2',
  'wifi-hi',
  'wifi-lo',
  'wifi-mid',
  'brightness',
  'camera',
  'clapper',
  'desktop',
  'eye',
  'film',
  'focus-target2',
  'foucs-target',
  'foucus',
  'hi-def',
  'image-many',
  'image',
  'joystick',
  'keyboard2',
  'laptop-2',
  'mouse',
  'multi-polyfim',
  'polaroid',
  'radio',
  'shutter',
  'sun-small',
  'sun',
  'tv',
  'uneye',
  'upload',
  'video-cam',
  'video-cam2',
  'video',
  'view-link',
  'web-cam',
  'add-comment',
  'avatar',
  'capture',
  'chat-bubble',
  'chat',
  'comment',
  'contacts',
  'delete-comment',
  'dial',
  'exchange',
  'faq',
  'fax',
  'magnify-phone',
  'mms',
  'phone-contacts',
  'phone-covo',
  'phone-massege',
  'phone-setting',
  'phone',
  'q-a',
  'remove-comment',
  'ringtone',
  'sms',
  'speech-bubble',
  'square-convo',
  'telephone-dial',
  'telephone',
  'touch-phone',
  'vibrate',
  'waiting-bubble',
  'call',
  'add-call',
  'call-attention',
  'call-close',
  'call-conversation',
  'call-minus',
  'call-question',
  'calling',
  'drop-call',
  'hashtag',
  'headset',
  'inbox',
  'incoming-call',
  'lock-call',
  'mail-add',
  'mail-attached',
  'mail-check',
  'mail-delete',
  'mail-favorite',
  'mail-heart',
  'mail-letter',
  'mail-receive',
  'mail-remove',
  'mail-sent',
  'mail',
  'miss-call',
  'open-mail',
  'outbox',
  'outgoing-call',
  'phone2',
  'add-user',
  'baby',
  'boy-glasses',
  'girl',
  'boy',
  'check-user',
  'confused',
  'delete-user',
  'disabled-person',
  'dual-user',
  'female',
  'formal-user',
  'gender',
  'thumbs-down',
  'girl-bangs',
  'thumbs-up',
  'hand-gun',
  'hand-point',
  'hand-pointing',
  'hand',
  'happy',
  'male',
  'meh',
  'multi-user',
  'remove-user',
  'sad',
  'smile',
  'user-admin',
  'user-cycle',
  'user',
  'border',
  'carousel',
  'close-quote',
  'open-quote',
  'open-scissors',
  'close-scissors',
  'code',
  'column',
  'curly-brace',
  'draw-table',
  'row',
  'grd-3',
  'grid-2',
  'grid',
  'indent',
  'unindent',
  'right-align',
  'justify',
  'center-align',
  'left-align',
  'line-space',
  'order-list',
  'undo',
  'redo',
  'super-script',
  'italic',
  'underline',
  'bold',
  'unorder-list',
  'word-wrap',
  'aid-kit',
  'apple',
  'atom',
  'board',
  'book-open',
  'book-stack',
  'book-top',
  'book',
  'bookmark',
  'bookmarked',
  'brochure',
  'bus',
  'diary',
  'dna',
  'flyers',
  'grad-certificate',
  'graduation-hat',
  'hospital',
  'lab-beaker',
  'lab-florence',
  'medical',
  'microscope',
  'newspaper',
  'notebook',
  'paint',
  'phone-book',
  'stethoscope',
  'thermometer',
  'triangle-ruler',
  'trifold-flyers',
  'add-file',
  'checklist',
  'copy-list',
  'copy',
  'delete-file',
  'delete-folder',
  'download-file',
  'export-folder',
  'favorite-folder',
  'folder',
  'gif',
  'import-folder',
  'jpg',
  'new-file',
  'new-folder',
  'prev-page',
  'next-page',
  'open-folder',
  'pdf',
  'png',
  'doc',
  'rar',
  'remove-file',
  'remove-folder',
  'search-file',
  'select-file',
  'to-do-list-left',
  'to-do-list',
  'to-do-task',
  'upload-file',
  'certificate',
  'cheque-dolar',
  'currency',
  'dolar-exchange',
  'dolar-sack',
  'dolar',
  'dollar-coins',
  'pound-coins',
  'euro-coins',
  'dollar-tag',
  'euro-exchange',
  'euro',
  'exchange-rate',
  'graph-bar',
  'graph-flactuation',
  'graph-line',
  'graph-point',
  'laptop',
  'mobile-message',
  'money-dolar',
  'partenon',
  'pound-exchange',
  'pound',
  'presentation',
  'savings-pig-bank',
  'vault',
  'wallet-card',
  'yen-coins',
  'yen-exchange',
  'yen',
  'calendar',
  'calendar-date',
  'remove-date',
  'add-date',
  'brief-case',
  'calculator',
  'delete-tab',
  'list-line',
  'operations',
  'payment',
  'pie-graph',
  'profile',
  'add-profile',
  'delete-profile',
  'remove-profile',
  'shred',
  'print',
  'stat-up',
  'stats-down',
  'stats',
  'tab-check',
  'add-tab',
  'close-tab',
  'date-success-add',
  'tab-align-center',
  'tab-align-left',
  'tab-align-right',
  'tab-code',
  'tab-content',
  'tab',
  'attach',
  'basket-ball',
  'brush',
  'bulb',
  'bulls-eye',
  'end-tag',
  'life-saver',
  'light-led',
  'magic-wand',
  'megaphone-wave',
  'megaphone',
  'navigation-arrow',
  'nut',
  'pencil-big',
  'pencil-edit',
  'pencil-write',
  'pencil',
  'pentool',
  'puzzle',
  'ribbon',
  'rocketship',
  'settings',
  'target-2',
  'target',
  'training-module',
  'trophy',
  'vector',
  'wrench-screwdriver',
  'wrench',
  'write-pencil',
  'alarm',
  'bell-close',
  'bell-minus',
  'bell-plus',
  'bell',
  'bomb',
  'clothes',
  'dashboard',
  'gift',
  'heart-arrow',
  'heart-break',
  'heart-close',
  'heart-minus',
  'heart-plus',
  'heart',
  'hourglass',
  'key-linear',
  'magnet',
  'necktie',
  'shield-check',
  'shield',
  'speech-bubble-heart',
  'stopwatch',
  'time-close',
  'time-minus',
  'time-plus',
  'time',
  'wand',
  'watch',
  'airplane',
  'check-line',
  'close-line',
  'compass',
  'corner-down-right',
  'corner-up-right',
  'download',
  'drawer',
  'file-drawer',
  'flag-pole',
  'flag',
  'globe',
  'link',
  'location-minus',
  'location-plus',
  'location-target',
  'location',
  'maximize',
  'minimize',
  'minus',
  'navigate',
  'pin',
  'plus',
  'redo2',
  'signboard-2',
  'signboard',
  'undo2',
  'unlink',
  'upload3',
  'web',
  'alert',
  'check',
  'close-mark',
  'close-tag',
  'close',
  'cursor',
  'disable',
  'down',
  'home',
  'info',
  'key',
  'left',
  'lock',
  'magnify',
  'minus2',
  'navi',
  'plus2',
  'power',
  'question-mark',
  'right',
  'signin',
  'signout',
  'star-circle',
  'star',
  'tags',
  'trash',
  'unlock',
  'up',
  'zoom-in',
  'zoom-out',
  'home4',
  'home2',
  'home3',
  'office',
  'newspaper2',
  'pencil3',
  'pencil2',
  'quill',
  'pen',
  'blog',
  'eyedropper',
  'droplet',
  'paint-format',
  'image2',
  'images',
  'camera2',
  'headphones',
  'music',
  'play4',
  'film2',
  'video-camera',
  'dice2',
  'pacman',
  'spades',
  'clubs',
  'diamonds',
  'bullhorn',
  'connection',
  'podcast',
  'feed',
  'mic2',
  'book2',
  'books',
  'library',
  'file-text',
  'profile2',
  'file-empty',
  'files-empty',
  'file-text2',
  'file-picture',
  'file-music',
  'file-play',
  'file-video',
  'file-zip',
  'copy2',
  'paste',
  'stack',
  'folder2',
  'folder-open',
  'folder-plus',
  'folder-minus',
  'folder-download',
  'folder-upload',
  'price-tag',
  'price-tags',
  'barcode',
  'qrcode',
  'ticket',
  'cart2',
  'coin-dollar',
  'coin-euro',
  'coin-pound',
  'coin-yen',
  'credit-card',
  'calculator2',
  'lifebuoy',
  'phone3',
  'phone-hang-up',
  'address-book',
  'envelop',
  'pushpin',
  'location3',
  'location2',
  'compass3',
  'compass2',
  'map',
  'map2',
  'history',
  'clock',
  'clock2',
  'alarm2',
  'bell2',
  'stopwatch2',
  'calendar2',
  'printer',
  'keyboard3',
  'display',
  'laptop2',
  'mobile',
  'mobile2',
  'tablet',
  'tv2',
  'drawer3',
  'drawer2',
  'box-add',
  'box-remove',
  'download4',
  'upload4',
  'floppy-disk',
  'drive',
  'database',
  'undo3',
  'redo3',
  'undo22',
  'redo22',
  'forward4',
  'reply',
  'bubble',
  'bubbles',
  'bubbles2',
  'bubble2',
  'bubbles3',
  'bubbles4',
  'user2',
  'users',
  'user-plus',
  'user-minus',
  'user-check',
  'user-tie',
  'quotes-left',
  'quotes-right',
  'hour-glass',
  'spinner',
  'spinner2',
  'spinner3',
  'spinner4',
  'spinner5',
  'spinner6',
  'spinner7',
  'spinner8',
  'spinner9',
  'spinner10',
  'spinner11',
  'binoculars',
  'search',
  'zoom-in2',
  'zoom-out2',
  'enlarge',
  'shrink',
  'enlarge2',
  'shrink2',
  'key3',
  'key2',
  'lock2',
  'unlocked',
  'wrench2',
  'equalizer',
  'equalizer2',
  'cog',
  'cogs',
  'hammer',
  'magic-wand2',
  'aid-kit2',
  'bug2',
  'pie-chart',
  'stats-dots',
  'stats-bars',
  'stats-bars2',
  'trophy2',
  'gift2',
  'glass',
  'glass2',
  'mug2',
  'spoon-knife',
  'leaf',
  'rocket',
  'meter',
  'meter2',
  'hammer2',
  'fire',
  'lab',
  'magnet2',
  'bin',
  'bin2',
  'briefcase',
  'airplane2',
  'truck',
  'road',
  'accessibility',
  'target2',
  'shield2',
  'power2',
  'switch',
  'power-cord',
  'clipboard',
  'list-numbered',
  'list',
  'list2',
  'tree2',
  'menu',
  'menu2',
  'menu3',
  'menu4',
  'cloud3',
  'cloud-download',
  'cloud-upload',
  'cloud-check',
  'download22',
  'upload22',
  'download3',
  'upload32',
  'sphere',
  'earth',
  'link2',
  'flag2',
  'attachment',
  'eye2',
  'eye-plus',
  'eye-minus',
  'eye-blocked',
  'bookmark2',
  'bookmarks',
  'sun2',
  'contrast',
  'brightness-contrast',
  'star-empty',
  'star-half',
  'star-full',
  'heart2',
  'heart-broken',
  'man',
  'woman',
  'man-woman',
  'happy3',
  'happy2',
  'smile3',
  'smile2',
  'tongue',
  'tongue2',
  'sad3',
  'sad2',
  'wink',
  'wink2',
  'grin',
  'grin2',
  'cool',
  'cool2',
  'angry',
  'angry2',
  'evil',
  'evil2',
  'shocked',
  'shocked2',
  'baffled',
  'baffled2',
  'confused3',
  'confused2',
  'neutral',
  'neutral2',
  'hipster',
  'hipster2',
  'wondering',
  'wondering2',
  'sleepy',
  'sleepy2',
  'frustrated',
  'frustrated2',
  'crying',
  'crying2',
  'point-up',
  'point-right',
  'point-down',
  'point-left',
  'warning',
  'notification',
  'question',
  'plus3',
  'minus3',
  'info2',
  'cancel-circle',
  'blocked',
  'cross',
  'checkmark',
  'checkmark2',
  'spell-check',
  'enter',
  'exit',
  'play22',
  'pause3',
  'stop3',
  'previous3',
  'next3',
  'backward3',
  'forward22',
  'play3',
  'pause2',
  'stop2',
  'backward22',
  'facebook2',
  'forward3',
  'first',
  'last',
  'previous2',
  'next2',
  'eject',
  'volume-high',
  'volume-medium',
  'volume-low',
  'volume-mute3',
  'volume-mute2',
  'volume-increase',
  'volume-decrease',
  'loop',
  'loop2',
  'infinite',
  'shuffle2',
  'arrow-up-left',
  'arrow-up',
  'arrow-up-right',
  'arrow-right',
  'arrow-down-right',
  'arrow-down',
  'arrow-down-left',
  'arrow-left',
  'arrow-up-left2',
  'arrow-up2',
  'arrow-up-right2',
  'arrow-right2',
  'arrow-down-right2',
  'arrow-down2',
  'arrow-down-left2',
  'arrow-left2',
  'circle-up',
  'circle-right',
  'circle-down',
  'circle-left',
  'tab2',
  'move-up',
  'move-down',
  'sort-alpha-asc',
  'sort-alpha-desc',
  'sort-numeric-asc',
  'sort-numberic-desc',
  'sort-amount-asc',
  'sort-amount-desc',
  'command',
  'shift',
  'ctrl',
  'opt',
  'checkbox-checked',
  'checkbox-unchecked',
  'radio-checked',
  'radio-checked2',
  'radio-unchecked',
  'crop2',
  'make-group',
  'ungroup',
  'scissors',
  'filter',
  'font',
  'ligature',
  'ligature2',
  'text-height',
  'text-width',
  'font-size',
  'bold2',
  'underline2',
  'italic2',
  'strikethrough',
  'omega',
  'sigma',
  'page-break',
  'superscript',
  'subscript',
  'superscript2',
  'subscript2',
  'text-color',
  'pagebreak',
  'clear-formatting',
  'table',
  'table2',
  'insert-template',
  'pilcrow',
  'ltr',
  'rtl',
  'section',
  'paragraph-left',
  'paragraph-center',
  'paragraph-right',
  'paragraph-justify',
  'indent-increase',
  'indent-decrease',
  'share3',
  'new-tab',
  'embed',
  'embed2',
  'terminal',
  'share2',
  'mail5',
  'mail2',
  'mail3',
  'mail4',
  'google',
  'google-plus',
  'google-plus2',
  'google-plus3',
  'google-drive',
  'facebook',
  'facebook3',
  'ello',
  'instagram',
  'twitter',
  'twitter2',
  'twitter3',
  'feed2',
  'feed3',
  'feed4',
  'youtube',
  'youtube2',
  'youtube3',
  'youtube4',
  'twitch',
  'vimeo',
  'vimeo2',
  'vimeo3',
  'lanyrd',
  'flickr',
  'flickr2',
  'flickr3',
  'flickr4',
  'picassa',
  'picassa2',
  'dribbble',
  'dribbble2',
  'dribbble3',
  'forrst',
  'forrst2',
  'deviantart',
  'deviantart2',
  'steam',
  'steam2',
  'dropbox',
  'onedrive',
  'github',
  'github2',
  'github3',
  'github4',
  'github5',
  'wordpress',
  'wordpress2',
  'joomla',
  'blogger',
  'blogger2',
  'tumblr',
  'tumblr2',
  'yahoo',
  'tux',
  'apple2',
  'finder',
  'android',
  'windows',
  'windows8',
  'soundcloud',
  'soundcloud2',
  'skype',
  'reddit',
  'linkedin',
  'linkedin2',
  'lastfm',
  'lastfm2',
  'delicious',
  'stumbleupon',
  'stumbleupon2',
  'stackoverflow',
  'pinterest',
  'pinterest2',
  'xing',
  'xing2',
  'flattr',
  'foursquare',
  'paypal',
  'paypal2',
  'paypal3',
  'yelp',
  'file-pdf',
  'file-openoffice',
  'file-word',
  'file-excel',
  'libreoffice',
  'html5',
  'html52',
  'css3',
  'git',
  'svg',
  'codepen',
  'chrome',
  'firefox',
  'IE',
  'opera',
  'safari',
  'IcoMoon'
];

export default class Icons extends React.Component {
  render() {
    return (
      <div>
        <h1 className="doc-heading">Icons</h1>
        <p className="lead">To do.</p>

        <div className="row">
          {this.renderIcons()}
        </div>
      </div>
    );
  }

  renderIcons() {
    return ICONS.map((icon, i) =>
      <div className="col-lg-2 col-md-3 col-xs-4 doc-bottom-space" key={i}>
        <div className="icon-box">
          <div className="inner">
            <div className="icon"><i className={`${PREFIX}${icon}`} /></div>
            <small>{PREFIX}{icon}</small>
          </div>
        </div>
      </div>
    );
  }
}
