let localScore = 0;
let visitorScore = 0;
const eventLog = document.getElementById('event-log');

document.getElementById('local-team-name').addEventListener('input', updateTeamNames);
document.getElementById('visitor-team-name').addEventListener('input', updateTeamNames);

function updateTeamNames() {
    const localTeamName = document.getElementById('local-team-name').value;
    const visitorTeamName = document.getElementById('visitor-team-name').value;

    document.getElementById('local-team-header').textContent = localTeamName ? localTeamName : 'Equipo Local';
    document.getElementById('visitor-team-header').textContent = visitorTeamName ? visitorTeamName : 'Equipo Visitante';
}

function addGoal(team) {
    let scorer = '';

    if (team === 'local') {
        localScore++;
        document.getElementById('local-score').textContent = localScore;
        scorer = document.getElementById('local-scorer').value;
        logEvent(`Gol del equipo local${scorer ? ' por ' + scorer : ''}`);
    } else if (team === 'visitor') {
        visitorScore++;
        document.getElementById('visitor-score').textContent = visitorScore;
        scorer = document.getElementById('visitor-scorer').value;
        logEvent(`Gol del equipo visitante${scorer ? ' por ' + scorer : ''}`);
    }
}

function addCard(team, color) {
    const teamName = team === 'local' ? document.getElementById('local-team-header').textContent : document.getElementById('visitor-team-header').textContent;
    const cardType = color === 'yellow' ? 'Tarjeta Amarilla' : 'Tarjeta Roja';
    logEvent(`${cardType} para el ${teamName}`);
}

function logEvent(event) {
    const li = document.createElement('li');
    li.textContent = event;
    eventLog.appendChild(li);
}
