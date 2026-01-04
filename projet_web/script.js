
// BASE DE DONNÉES

let db = {
    etudiants: [
        {id: 1, nom: 'Benjelloun', prenom: 'Ahmed', email: 'ahmed.b@email.com', telephone: '0612345678', classe: 'Terminale A', dateNaissance: '2005-03-15'},
        {id: 2, nom: 'El Amrani', prenom: 'Fatima', email: 'fatima.e@email.com', telephone: '0623456789', classe: 'Première B', dateNaissance: '2006-07-22'},
        {id: 3, nom: 'Idrissi', prenom: 'Karim', email: 'karim.i@email.com', telephone: '0634567890', classe: 'Terminale A', dateNaissance: '2005-11-08'},
        {id: 4, nom: 'Lahlou', prenom: 'Sara', email: 'sara.l@email.com', telephone: '0645678901', classe: 'Seconde C', dateNaissance: '2007-01-30'},
        {id: 5, nom: 'Moussaoui', prenom: 'Youssef', email: 'youssef.m@email.com', telephone: '0656789012', classe: 'Première B', dateNaissance: '2006-09-12'},
        {id: 6, nom: 'Alaoui', prenom: 'Zineb', email: 'zineb.a@email.com', telephone: '0667890123', classe: 'Terminale A', dateNaissance: '2005-05-20'},
        {id: 7, nom: 'Berrada', prenom: 'Omar', email: 'omar.b@email.com', telephone: '0678901234', classe: 'Seconde C', dateNaissance: '2007-08-14'}
    ],
    professeurs: [
        {id: 1, nom: 'Benkirane', prenom: 'Hassan', email: 'h.benkirane@ecole.ma', telephone: '0661234567', specialite: 'Mathématiques'},
        {id: 2, nom: 'Alami', prenom: 'Amina', email: 'a.alami@ecole.ma', telephone: '0662345678', specialite: 'Physique-Chimie'},
        {id: 3, nom: 'Tazi', prenom: 'Mohammed', email: 'm.tazi@ecole.ma', telephone: '0663456789', specialite: 'Français'},
        {id: 4, nom: 'Fassi', prenom: 'Laila', email: 'l.fassi@ecole.ma', telephone: '0664567890', specialite: 'Anglais'},
        {id: 5, nom: 'Kettani', prenom: 'Rachid', email: 'r.kettani@ecole.ma', telephone: '0665678901', specialite: 'Histoire-Géographie'}
    ],
    classes: [
        {id: 1, nom: 'Terminale A', niveau: 'Terminale', capacite: '35', professeurPrincipal: 'Hassan Benkirane'},
        {id: 2, nom: 'Première B', niveau: 'Première', capacite: '30', professeurPrincipal: 'Amina Alami'},
        {id: 3, nom: 'Seconde C', niveau: 'Seconde', capacite: '32', professeurPrincipal: 'Mohammed Tazi'},
        {id: 4, nom: 'Terminale B', niveau: 'Terminale', capacite: '34', professeurPrincipal: 'Laila Fassi'}
    ],
    matieres: [
        {id: 1, nom: 'Mathématiques', code: 'MATH', coefficient: '5', description: 'Algèbre et Géométrie'},
        {id: 2, nom: 'Physique-Chimie', code: 'PC', coefficient: '4', description: 'Sciences Physiques'},
        {id: 3, nom: 'Français', code: 'FR', coefficient: '3', description: 'Langue et Littérature'},
        {id: 4, nom: 'Anglais', code: 'ANG', coefficient: '3', description: 'Langue Vivante'},
        {id: 5, nom: 'Histoire-Géographie', code: 'HG', coefficient: '3', description: 'Sciences Humaines'},
        {id: 6, nom: 'SVT', code: 'SVT', coefficient: '4', description: 'Sciences de la Vie et de la Terre'}
    ],
    notes: [
        {id: 1, etudiant: 'Ahmed Benjelloun', matiere: 'Mathématiques', note: '16.5', date: '2024-11-15', type: 'Examen'},
        {id: 2, etudiant: 'Fatima El Amrani', matiere: 'Physique-Chimie', note: '14.0', date: '2024-11-18', type: 'Devoir'},
        {id: 3, etudiant: 'Karim Idrissi', matiere: 'Français', note: '15.5', date: '2024-11-20', type: 'Examen'},
        {id: 4, etudiant: 'Sara Lahlou', matiere: 'Anglais', note: '17.0', date: '2024-11-22', type: 'Oral'},
        {id: 5, etudiant: 'Youssef Moussaoui', matiere: 'Mathématiques', note: '13.5', date: '2024-11-25', type: 'Devoir'},
        {id: 6, etudiant: 'Zineb Alaoui', matiere: 'Histoire-Géographie', note: '16.0', date: '2024-11-28', type: 'Examen'}
    ]
};


// CONFIGURATION DES SECTIONS

const config = {
    etudiants: {
        title: 'Gestion des Étudiants',
        fields: ['nom', 'prenom', 'email', 'telephone', 'classe', 'dateNaissance'],
        headers: ['ID', 'Nom', 'Prénom', 'Email', 'Téléphone', 'Classe', 'Actions']
    },
    professeurs: {
        title: 'Gestion des Professeurs',
        fields: ['nom', 'prenom', 'email', 'telephone', 'specialite'],
        headers: ['ID', 'Nom', 'Prénom', 'Email', 'Téléphone', 'Spécialité', 'Actions']
    },
    classes: {
        title: 'Gestion des Classes',
        fields: ['nom', 'niveau', 'capacite', 'professeurPrincipal'],
        headers: ['ID', 'Nom', 'Niveau', 'Capacité', 'Professeur Principal', 'Actions']
    },
    matieres: {
        title: 'Gestion des Matières',
        fields: ['nom', 'code', 'coefficient', 'description'],
        headers: ['ID', 'Nom', 'Code', 'Coefficient', 'Description', 'Actions']
    },
    notes: {
        title: 'Gestion des Notes',
        fields: ['etudiant', 'matiere', 'note', 'date', 'type'],
        headers: ['ID', 'Étudiant', 'Matière', 'Note', 'Date', 'Type', 'Actions']
    }
};


// VARIABLES GLOBALES

let currentSection = '';
let currentItem = null;
let deleteId = null;
let myChart = null;
let formMode = 'add';
let sortColumn = null;
let sortDirection = 'asc';
let filters = {};


// INITIALISATION

document.addEventListener('DOMContentLoaded', function() {
    initChart();
    updateCounts();
});


// GRAPHIQUE

function initChart() {
    const ctx = document.getElementById('chartCanvas');
    if (!ctx) return;
    
    myChart = new Chart(ctx.getContext('2d'), {
        type: 'bar',
        data: {
            labels: ['Étudiants', 'Professeurs'],
            datasets: [{
                label: 'Nombre',
                data: [0, 0],
                backgroundColor: ['#2563eb', '#f97316'],
                borderWidth: 0,
                borderRadius: 8
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 5
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
}


// MISE À JOUR DES COMPTEURS

function updateCounts() {
    const countEtu = document.getElementById('count-etudiants');
    const countProf = document.getElementById('count-professeurs');
    const countClasses = document.getElementById('count-classes');
    const countMat = document.getElementById('count-matieres');
    
    if (countEtu) countEtu.textContent = db.etudiants.length;
    if (countProf) countProf.textContent = db.professeurs.length;
    if (countClasses) countClasses.textContent = db.classes.length;
    if (countMat) countMat.textContent = db.matieres.length;
    
    if (myChart) {
        myChart.data.datasets[0].data = [db.etudiants.length, db.professeurs.length];
        myChart.update();
    }
}


// NAVIGATION

function showDashboard() {
    document.getElementById('dashboard').classList.remove('hidden');
    document.getElementById('crud-section').classList.add('hidden');
    updateMenuActive(event.target);
}

function showSection(section) {
    currentSection = section;
    sortColumn = null;
    sortDirection = 'asc';
    filters = {};
    
    document.getElementById('dashboard').classList.add('hidden');
    document.getElementById('crud-section').classList.remove('hidden');
    document.getElementById('section-title').textContent = config[section].title;
    
    // Afficher le tableau et masquer le formulaire
    document.getElementById('table-view').classList.remove('hidden');
    document.getElementById('form-view').classList.add('hidden');
    
    renderTable();
    updateMenuActive(event.target);
}

function updateMenuActive(element) {
    document.querySelectorAll('.menu-item').forEach(item => {
        item.classList.remove('active');
    });
    if (element) element.classList.add('active');
}


// FILTRAGE ET TRI

function applyFilters() {
    if (!currentSection) return db[currentSection];
    
    let data = [...db[currentSection]];
    
    // Appliquer les filtres
    Object.keys(filters).forEach(field => {
        const filterValue = filters[field].toLowerCase();
        if (filterValue) {
            data = data.filter(item => {
                const value = String(item[field] || '').toLowerCase();
                return value.includes(filterValue);
            });
        }
    });
    
    // Appliquer le tri
    if (sortColumn !== null) {
        data.sort((a, b) => {
            let aVal = a[sortColumn];
            let bVal = b[sortColumn];
            
            // Conversion pour tri numérique si possible
            if (!isNaN(aVal) && !isNaN(bVal)) {
                aVal = parseFloat(aVal);
                bVal = parseFloat(bVal);
            } else {
                aVal = String(aVal || '').toLowerCase();
                bVal = String(bVal || '').toLowerCase();
            }
            
            if (aVal < bVal) return sortDirection === 'asc' ? -1 : 1;
            if (aVal > bVal) return sortDirection === 'asc' ? 1 : -1;
            return 0;
        });
    }
    
    return data;
}

function sortTable(field, index) {
    if (sortColumn === field) {
        sortDirection = sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
        sortColumn = field;
        sortDirection = 'asc';
    }
    renderTable();
}

function filterTable(field, value) {
    filters[field] = value;
    renderTable();
}


// RENDU DU TABLEAU

function renderTable() {
    if (!currentSection) return;
    
    const conf = config[currentSection];
    const filteredData = applyFilters();
    
    // Headers avec tri et filtres
    const headerRow = document.getElementById('table-header');
    if (headerRow) {
        headerRow.innerHTML = '';
        
        // En-tête ID
        const thId = document.createElement('th');
        thId.className = 'px-6 py-4 text-left text-sm font-semibold sortable-header';
        thId.innerHTML = `
            <div class="header-content">
                <div class="flex items-center justify-between" onclick="sortTable('id', 0)">
                    <span>ID</span>
                    <span class="sort-icon ${sortColumn === 'id' ? 'active' : ''}">
                        ${sortColumn === 'id' ? (sortDirection === 'asc' ? '▲' : '▼') : '⇅'}
                    </span>
                </div>
                <input type="text" class="filter-input" placeholder="Filtrer..." 
                       oninput="filterTable('id', this.value)" value="${filters['id'] || ''}">
            </div>
        `;
        headerRow.appendChild(thId);
        
        // En-têtes pour chaque champ
        conf.fields.forEach((field, index) => {
            const th = document.createElement('th');
            th.className = 'px-6 py-4 text-left text-sm font-semibold sortable-header';
            
            const label = conf.headers[index + 1] || field;
            th.innerHTML = `
                <div class="header-content">
                    <div class="flex items-center justify-between" onclick="sortTable('${field}', ${index + 1})">
                        <span>${label}</span>
                        <span class="sort-icon ${sortColumn === field ? 'active' : ''}">
                            ${sortColumn === field ? (sortDirection === 'asc' ? '▲' : '▼') : '⇅'}
                        </span>
                    </div>
                    <input type="text" class="filter-input" placeholder="Filtrer..." 
                           oninput="filterTable('${field}', this.value)" value="${filters[field] || ''}">
                </div>
            `;
            headerRow.appendChild(th);
        });
        
        // En-tête Actions
        const thActions = document.createElement('th');
        thActions.className = 'px-6 py-4 text-left text-sm font-semibold';
        thActions.textContent = 'Actions';
        headerRow.appendChild(thActions);
    }
    
    // Body
    const tbody = document.getElementById('table-body');
    if (!tbody) return;
    
    if (filteredData.length === 0) {
        tbody.innerHTML = `<tr><td colspan="${conf.headers.length}" class="px-6 py-8 text-center text-gray-500">
            ${Object.keys(filters).some(k => filters[k]) ? 'Aucun résultat trouvé avec ces filtres.' : 'Aucune donnée disponible. Cliquez sur "Ajouter" pour commencer.'}
        </td></tr>`;
    } else {
        tbody.innerHTML = filteredData.map((item) => {
            const rowData = conf.fields.map(field => 
                `<td class="px-6 py-4 text-sm text-gray-700">${item[field] || '-'}</td>`
            ).join('');
            
            return `
                <tr>
                    <td class="px-6 py-4 text-sm text-gray-700 font-semibold">${item.id}</td>
                    ${rowData}
                    <td class="px-6 py-4 text-sm">
                        <div class="flex gap-2">
                            <button onclick="viewDetails(${item.id}); return false;" 
                                    class="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition text-xs">
                                Détails
                            </button>
                            <button onclick="showFormSection('edit', ${item.id}); return false;" 
                                    class="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition text-xs">
                                Modifier
                            </button>
                            <button onclick="openConfirmModal(${item.id}); return false;" 
                                    class="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition text-xs">
                                Supprimer
                            </button>
                        </div>
                    </td>
                </tr>
            `;
        }).join('');
    }
}


// GESTION FORMULAIRE

function showFormSection(mode, id = null) {
    const tableView = document.getElementById('table-view');
    const formView = document.getElementById('form-view');
    const formTitle = document.getElementById('form-title');
    const fields = document.getElementById('form-fields');
    
    formMode = mode;
    currentItem = id;
    
    if (formTitle) {
        formTitle.textContent = mode === 'add' ? 'Ajouter un nouvel élément' : 'Modifier l\'élément';
    }
    
    const conf = config[currentSection];
    const item = id ? db[currentSection].find(i => i.id === id) : {};
    
    if (fields) {
        fields.innerHTML = conf.fields.map(field => {
            const label = field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1');
            const value = item[field] || '';
            const inputType = field.includes('date') ? 'date' : 
                            field.includes('email') ? 'email' : 
                            field.includes('telephone') ? 'tel' : 'text';
            
            return `
                <div>
                    <label class="block text-sm font-semibold text-gray-700 mb-2">${label}</label>
                    <input type="${inputType}" name="${field}" value="${value}" 
                           class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                           required>
                </div>
            `;
        }).join('');
    }
    
    // Masquer le tableau et afficher le formulaire
    if (tableView) tableView.classList.add('hidden');
    if (formView) formView.classList.remove('hidden');
}

function hideFormSection() {
    const tableView = document.getElementById('table-view');
    const formView = document.getElementById('form-view');
    const form = document.getElementById('crud-form');
    
    // Afficher le tableau et masquer le formulaire
    if (tableView) tableView.classList.remove('hidden');
    if (formView) formView.classList.add('hidden');
    if (form) form.reset();
    
    currentItem = null;
}

function handleFormSubmit(event) {
    event.preventDefault();
    event.stopPropagation();
    
    const form = document.getElementById('crud-form');
    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => data[key] = value);
    
    if (formMode === 'add') {
        const maxId = db[currentSection].length > 0 
            ? Math.max(...db[currentSection].map(i => i.id)) 
            : 0;
        data.id = maxId + 1;
        db[currentSection].push(data);
    } else {
        const index = db[currentSection].findIndex(i => i.id === currentItem);
        if (index !== -1) {
            db[currentSection][index] = { ...db[currentSection][index], ...data };
        }
    }
    
    hideFormSection();
    updateCounts();
    renderTable();
    
    return false;
}


// MODAL DETAILS

function viewDetails(id) {
    const item = db[currentSection].find(i => i.id === id);
    const content = document.getElementById('details-content');
    const conf = config[currentSection];
    
    if (content && item) {
        content.innerHTML = `
            <div class="bg-gradient-to-br from-emerald-50 to-blue-50 p-6 rounded-lg">
                ${conf.fields.map(field => {
                    const label = field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1');
                    return `
                        <div class="mb-4 pb-4 border-b border-gray-200 last:border-0">
                            <span class="text-sm font-semibold text-gray-600">${label}:</span>
                            <p class="text-lg text-gray-800 mt-1">${item[field] || '-'}</p>
                        </div>
                    `;
                }).join('')}
                <div class="mt-4 text-xs text-gray-500">
                    <p>ID: ${item.id}</p>
                    <p>Créé le: ${new Date().toLocaleDateString('fr-FR')}</p>
                </div>
            </div>
        `;
    }
    
    const modal = document.getElementById('details-modal');
    if (modal) modal.classList.remove('hidden');
}

function closeDetailsModal() {
    const modal = document.getElementById('details-modal');
    if (modal) modal.classList.add('hidden');
}


// MODAL CONFIRMATION

function openConfirmModal(id) {
    deleteId = id;
    const modal = document.getElementById('confirm-modal');
    if (modal) modal.classList.remove('hidden');
}

function closeConfirmModal() {
    deleteId = null;
    const modal = document.getElementById('confirm-modal');
    if (modal) modal.classList.add('hidden');
}

function confirmDelete() {
    db[currentSection] = db[currentSection].filter(i => i.id !== deleteId);
    closeConfirmModal();
    updateCounts();
    renderTable();
}