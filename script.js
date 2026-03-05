const reasons = [
    // --- PERSONALIDAD ---
    "Por la bondad genuina que hay en tu corazón.",
    "Por tu capacidad de ver el lado positivo incluso en los días grises.",
    "Por la inteligencia con la que resuelves cualquier problema.",
    "Por tu paciencia infinita cuando me explicas algo.",
    "Por la valentía con la que enfrentas tus miedos.",
    "Por esa chispa de locura que hace que la vida sea divertida.",
    "Por tu honestidad, aunque a veces duela.",
    "Por la forma en que cuidas a las personas que amas.",
    "Por tu ambición y las ganas que tienes de comerte el mundo.",
    "Por tu humildad a pesar de todo lo que vales.",

    // --- MOMENTOS JUNTOS ---
    "Por esa primera vez que nuestras miradas se cruzaron.",
    "Por la forma en que me tomas la mano cuando caminamos.",
    "Por los silencios cómodos que compartimos.",
    "Por nuestras charlas profundas de madrugada.",
    "Por cómo me haces reír cuando estoy a punto de llorar.",
    "Por cada café o comida que hemos compartido.",
    "Por los viajes que hemos hecho y los que vendrán.",
    "Por el apoyo que me das en mis proyectos más locos.",
    "Por cómo respetas mi espacio y mis tiempos.",
    "Por los abrazos que me reinician el alma.",

    // --- DETALLES FÍSICOS (Únicos) ---
    "Por el brillo de tus ojos cuando hablas de algo que te apasiona.",
    "Por esa pequeña marca o lunar que solo yo conozco.",
    "Por la suavidad de tu piel.",
    "Por tu aroma, que se queda en mi ropa y me hace recordarte.",
    "Por la forma en que acomodas tu cabello tras la oreja.",
    "Por tu sonrisa, que ilumina cualquier lugar oscuro.",
    "Por la calidez de tus besos.",
    "Por cómo encajas perfectamente en mis brazos.",
    "Por tus gestos cuando estás concentrada.",
    "Por la paz que transmite tu rostro cuando duermes.",

    // --- APOYO Y FUTURO ---
    "Por creer en mí cuando ni yo mismo lo hacía.",
    "Por ser mi lugar seguro en este mundo caótico.",
    "Por los planes que construimos juntos.",
    "Por querer ser una mejor versión de ti misma cada día.",
    "Por cómo me inspiras a ser mejor persona.",
    "Por defender lo nuestro ante cualquier adversidad.",
    "Por la confianza ciega que tenemos el uno en el otro.",
    "Por perdonar mis errores y ayudarme a aprender de ellos.",
    "Por ser mi mejor amiga además de mi pareja.",
    "Por el simple hecho de existir y estar en mi vida.",

    // --- RAZONES COTIDIANAS ---
    "Por cómo preparas el café (o tu comida favorita).",
    "Por tus gustos musicales tan especiales.",
    "Por las películas que vemos aunque te quedes dormida.",
    "Por tus mensajes de 'buenos días' que me alegran la jornada.",
    "Por cómo te llevas con mi familia y amigos.",
    "Por tu estilo único de vestir.",
    "Por las canciones que me dedicas.",
    "Por los memes que me envías para hacerme reír.",
    "Por cómo te preocupas de que haya llegado bien a casa.",
    "Por tu forma de bailar cuando nadie te ve."
  
];

const listContainer = document.getElementById('reasons-list');
const searchInput = document.getElementById('search');

function displayReasons(filter = '') {
    listContainer.innerHTML = '';
    const filteredReasons = reasons.filter(r => r.toLowerCase().includes(filter.toLowerCase()));
    
    filteredReasons.forEach((reason, index) => {
        const card = document.createElement('div');
        card.className = 'reason-card';
        card.style.animation = `fadeIn 0.5s ease forwards ${index * 0.05}s`;
        card.innerHTML = `<span class="number">#${index + 1}</span> ${reason}`;
        listContainer.appendChild(card);
    });
}

searchInput.addEventListener('input', (e) => displayReasons(e.target.value));
displayReasons();
