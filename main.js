const upcomingElections = {
    "124": { // Canada
        electionDate: "October 2025",
        incumbentParty: "Liberal Party of Canada",
        type: "General"
    },
    "036": { // Australia
        electionDate: "May 2025",
        incumbentParty: "Australian Labor Party",
        type: "General"
    },
    // Singapore
    "702": {
        electionDate: "May 2025",
        incumbentParty: "People's Action Party",
        type: "Parliamentary"
    },
    // Philippines
    "608": {
        electionDate: "May 2025",
        incumbentParty: "PDP-Laban",
        type: "Parliamentary"
    },
    "566": { // Nigeria
        electionDate: "February 2027",
        incumbentParty: "All Progressives Congress (APC)",
        type: "General"
    },
    "076": { // Brazil
        electionDate: "October 2026",
        incumbentParty: "Workers' Party",
        type: "General"
    },
    "616": { // Poland
        electionDate: "May 2025",
        incumbentParty: "Law and Justice (PiS)",
        type: "Presidential"
    },
    "348": { // Hungary
        electionDate: "April 2026",
        incumbentParty: "Fidesz – Hungarian Civic Alliance",
        type: "Parliamentary"
    },
    "380": { // Italy
        electionDate: "May 2027",
        incumbentParty: "Brothers of Italy (FdI)",
        type: "General"
    },
    "170": { // Colombia
        electionDate: "May 2026",
        incumbentParty: "Pacto Histórico",
        type: "Presidential"
    },
};

const electionData = {
    '710': { // South Africa
        supportChange: -17.3,
        incumbentParty: "African National Congress (ANC)",
        opposition: "Democratic Alliance (DA)",
        electionDate: "May 2024",
        details: "First loss of parliamentary majority since 1994 due to service failures and corruption",
        voterTurnout: "64.0%",
        previousResult: "57.5% (2019)",
        currentResult: "40.2% (2024)"
    },
    '840': { // United States
        supportChange: -3.7,
        incumbentParty: "Democratic Party",
        opposition: "Republican Party",
        electionDate: "November 2024",
        details: "Historic third consecutive incumbent loss amid economic anxiety",
        voterTurnout: "61.2%",
        previousResult: "51.3% (2020)",
        currentResult: "47.6% (2024)"
    },
    '826': { // United Kingdom
        supportChange: -20.0,
        incumbentParty: "Conservative Party",
        opposition: "Labour Party",
        electionDate: "October 2024",
        details: "Worst defeat since 1906 with NHS failures and scandals",
        voterTurnout: "67.3%",
        previousResult: "43.6% (2019)",
        currentResult: "23.6% (2024)"
    },
    '356': { // India
        supportChange: -0.8,
        incumbentParty: "Bharatiya Janata Party (BJP)",
        opposition: "INDIA Alliance",
        electionDate: "June 2024",
        details: "Lost outright majority despite stable national vote share",
        voterTurnout: "66.1%",
        previousResult: "37.4% (2019)",
        currentResult: "36.6% (2024)"
    },
    '072': { // Botswana
        supportChange: -42.0,
        incumbentParty: "Botswana Democratic Party",
        opposition: "Umbrella for Democratic Change",
        electionDate: "October 2024",
        details: "Ended 58-year rule through coalition opposition",
        voterTurnout: "78.3%",
        previousResult: "53.3% (2019)",
        currentResult: "11.3% (2024)"
    },
    '410': { // South Korea
        supportChange: -15.0,
        incumbentParty: "People Power Party",
        opposition: "Democratic Party",
        electionDate: "April 2024",
        details: "Conservative backlash over economic stagnation",
        voterTurnout: "73.2%",
        previousResult: "49.0% (2020)",
        currentResult: "34.0% (2024)"
    },
    '276': { // Germany
        supportChange: -9.3,
        incumbentParty: "Social Democratic Party (SPD)",
        opposition: "Christian Democratic Union (CDU/CSU)",
        electionDate: "February 2025",
        details: "Coalition collapse and far-right surge",
        voterTurnout: "76.1%",
        previousResult: "25.7% (2021)",
        currentResult: "16.4% (2025)"
    },
    '392': { // Japan
        supportChange: -12.4,
        incumbentParty: "Liberal Democratic Party",
        opposition: "Constitutional Democratic Party",
        electionDate: "October 2024",
        details: "Cost of living crisis and factional scandals",
        voterTurnout: "55.8%",
        previousResult: "34.7% (2021)",
        currentResult: "22.3% (2024)"
    },
    "250": { // France
        supportChange: 1.6,
        incumbentParty: "La République En Marche!",
        opposition: "National Rally",
        electionDate: "April 2024",
        details: "Incumbent party retained power with a slight increase in support, amid concerns about voter apathy.",
        voterTurnout: "65.2%",
        previousResult: "58.5% (2017)",
        currentResult: "60.1% (2024)"
    },
    "484": { // Mexico
        supportChange: 8.0,
        incumbentParty: "National Regeneration Movement (Morena)",
        opposition: "Broad Front for Mexico (PAN–PRI–PRD coalition)",
        electionDate: "June 2024",
        details: "Claudia Sheinbaum of Morena won the presidency by a landslide, increasing the party's vote share to 61.2%.",
        voterTurnout: "61.0%",
        previousResult: "53.2% (2018)",
        currentResult: "61.2% (2024)"
    },
    "360": { // Indonesia
        supportChange: -30.0,
        incumbentParty: "Indonesian Democratic Party of Struggle (PDI-P)",
        opposition: "Great Indonesia Movement Party (Gerindra)",
        electionDate: "February 2024",
        details: "Prabowo Subianto of Gerindra won the presidency, marking a significant loss for PDI-P.",
        voterTurnout: "82.4%",
        previousResult: "55.5% (2019)",
        currentResult: "24.9% (2024)"
    },
    "586": { // Pakistan
        supportChange: -5.0,
        incumbentParty: "Pakistan Muslim League (N) – Pakistan Peoples Party coalition",
        opposition: "Pakistan Tehreek-e-Insaf (PTI, barred)",
        electionDate: "February 2024",
        details: "PTI-backed independents emerged as the largest faction despite the party ban.",
        voterTurnout: "47.8%",
        previousResult: "32.2% (2018)",
        currentResult: "27.3% (2024)"
    },
    "158": { // Taiwan
        supportChange: -17.0,
        incumbentParty: "Democratic Progressive Party (DPP)",
        opposition: "Kuomintang (KMT)",
        electionDate: "January 2024",
        details: "William Lai of DPP won the presidency with reduced support, challenged by a strong third-party presence.",
        voterTurnout: "72.0%",
        previousResult: "57.1% (2020)",
        currentResult: "40.1% (2024)"
    },
    "144": { // Sri Lanka
        supportChange: null,
        incumbentParty: "Sri Lanka Podujana Peramuna (SLPP)",
        opposition: "National People's Power (NPP) alliance",
        electionDate: "September 2024",
        details: "Anura Kumara Dissanayake won the presidency, defeating the incumbent-backed coalition.",
        voterTurnout: "70.0%",
        previousResult: "52.3% (2019)",
        currentResult: "55.0% (2024)"
    },
    "040": { // Austria
        supportChange: -11.2,
        incumbentParty: "Austrian People's Party (ÖVP)",
        opposition: "Freedom Party of Austria (FPÖ)",
        electionDate: "September 2024",
        details: "FPÖ surged to first place, marking a historic low for ÖVP.",
        voterTurnout: "77.7%",
        previousResult: "37.5% (2019)",
        currentResult: "26.3% (2024)"
    },
    "480": { // Mauritius
        supportChange: -10.4,
        incumbentParty: "Militant Socialist Movement (MSM)",
        opposition: "Alliance du Changement (Labour Party-led)",
        electionDate: "November 2024",
        details: "Alliance du Changement won a historic landslide, ending MSM's rule.",
        voterTurnout: "79.0%",
        previousResult: "37.7% (2019)",
        currentResult: "27.3% (2024)"
    },
    "032": { // Argentina
        supportChange: -4.0,
        incumbentParty: "Unión por la Patria (Peronist coalition)",
        opposition: "La Libertad Avanza (right-wing liberal)",
        electionDate: "October 2023 (runoff Nov 2023)",
        details: "Javier Milei won the presidency, breaking Peronist dominance.",
        voterTurnout: "76.0%",
        previousResult: "48.2% (2019)",
        currentResult: "44.3% (2023)"
    },
    "724": { // Spain
        supportChange: 3.7,
        incumbentParty: "Spanish Socialist Workers' Party (PSOE)",
        opposition: "People's Party (PP)",
        electionDate: "July 2023",
        details: "Spain's snap general election saw the opposition PP win a plurality but fall short of a majority. The incumbent PSOE retained power through alliances, with its vote share rising from 28.0% to 31.7%.",
        voterTurnout: "66.6%",
        previousResult: "28.0% (2019)",
        currentResult: "31.7% (2023)"
    },
    "792": { // Turkey
        supportChange: -7.0,
        incumbentParty: "Justice and Development Party (AKP)",
        opposition: "Republican People's Party (CHP)",
        electionDate: "May 2023",
        details: "Turkey's presidential and parliamentary elections saw Erdoğan's AKP-led alliance retain power despite falling support. The AKP's vote share dropped from 42.6% to 35.6%, with exceptionally high 87.0% turnout.",
        voterTurnout: "87.0%",
        previousResult: "42.6% (2018)",
        currentResult: "35.6% (2023)"
    },
    "764": { // Thailand
        supportChange: -12.3,
        incumbentParty: "Palang Pracharath Party (PPRP)",
        opposition: "Move Forward Party (MFP)",
        electionDate: "May 2023",
        details: "Thailand's May 2023 general election saw a pro-democracy wave as the opposition Move Forward Party won the most seats. Turnout reached a record 75.2%. The military-backed ruling party (Palang Pracharath) suffered a huge defeat, dropping from 23.3% of the vote in 2019 to just 11.0%. However, the victorious reformist party was later blocked from leading the government by the military-appointed Senate.",
        voterTurnout: "75.2%",
        previousResult: "23.3% (2019)",
        currentResult: "11.0% (2023)"
    },
    "246": { // Finland
        supportChange: 2.2,
        incumbentParty: "Social Democratic Party (SDP)",
        opposition: "National Coalition Party (KOK)",
        electionDate: "April 2023",
        details: "Finland's April 2023 parliamentary election ousted Sanna Marin's center-left government. The conservative National Coalition Party led with 20.8% and formed a new right-leaning coalition, while Marin's Social Democratic Party improved its vote share to 19.9% (up from 17.7% in 2019). Voter turnout was 71.9%. Despite gaining support, the SDP finished third behind the far-right Finns Party (20.1%) and the NCP.",
        voterTurnout: "71.9%",
        previousResult: "17.7% (2019)",
        currentResult: "19.9% (2023)"
    },
    "528": { // Netherlands
        supportChange: -6.7,
        incumbentParty: "People's Party for Freedom and Democracy (VVD)",
        opposition: "Party for Freedom (PVV)",
        electionDate: "November 2023",
        details: "The November 2023 Dutch general election produced a political upset. The far-right PVV became the largest party with 23.5% of the vote, while Prime Minister Mark Rutte's liberal VVD plummeted to 15.2%. All four incumbent coalition parties suffered losses. Turnout was 77.8%. The VVD's vote share fell from 21.9% in 2021 to 15.2% in 2023, reflecting a significant swing to the opposition.",
        voterTurnout: "77.8%",
        previousResult: "21.9% (2021)",
        currentResult: "15.2% (2023)"
    },
    "300": { // Greece
        supportChange: 0.7,
        incumbentParty: "New Democracy (ND)",
        opposition: "SYRIZA – Coalition of the Radical Left",
        electionDate: "June 2023",
        details: "Greece held two general elections in 2023. In the June 2023 re-run, Prime Minister Kyriakos Mitsotakis's New Democracy scored a landslide 40.6% to secure a majority. The left-wing SYRIZA opposition collapsed to just 17.8% (down from ~31.5% in 2019). Turnout was only 53.7%. ND's vote share was roughly unchanged (around 40% vs 39.9% in 2019), but SYRIZA's sharp decline handed ND a much stronger mandate.",
        voterTurnout: "53.7%",
        previousResult: "39.9% (2019)",
        currentResult: "40.6% (2023)"
    },
    "320": { // Guatemala
        "supportChange": -47.9,
        "incumbentParty": "Vamos",
        "opposition": "Movimiento Semilla",
        "electionDate": "August 2023",
        "details": "Guatemala's August 2023 presidential runoff delivered a shock anti-corruption victory. Opposition candidate Bernardo Arévalo (Movimiento Semilla) won with 60.9%, while the long-ruling establishment was repudiated. Turnout in the second round was about 45.0%. The incumbent Vamos party's support plunged from 58.3% in the 2019 runoff (for outgoing President Giammattei) to just 10.4% in 2023. The result marked a dramatic demand for change in Guatemalan politics.",
        "voterTurnout": "45.0%",
        "previousResult": "58.3% (2019)",
        "currentResult": "10.4% (2023)"
    },
    "554": {
        "supportChange": -23.1,
        "incumbentParty": "New Zealand Labour Party",
        "opposition": "New Zealand National Party",
        "electionDate": "October 2023",
        "details": "New Zealand's October 2023 general election brought a change of government. The centre-right National Party won 38.1% and formed a coalition, defeating Jacinda Ardern's Labour Party, which fell to 26.9%. Voter turnout was 78.4%. Labour's vote share almost halved from its 50.0% landslide in 2020, a swing of –23 points, reflecting public dissatisfaction after six years of Labour-led governance.",
        "voterTurnout": "78.4%",
        "previousResult": "50.0% (2020)",
        "currentResult": "26.9% (2023)"
    },
    "703": {
        "supportChange": -16.1,
        "incumbentParty": "Ordinary People and Independent Personalities (OĽaNO)",
        "opposition": "Direction – Social Democracy (Smer-SD)",
        "electionDate": "September 2023",
        "details": "Slovakia's September 2023 parliamentary elections saw former Prime Minister Robert Fico's Smer party return to power. Smer-SD emerged as the largest party with about 23% of the vote, while the outgoing centrist OĽaNO party and its allies collapsed to 8.9%, losing most of their seats (down from 25.0% and 53 seats in 2020). Turnout was 68.5%. The outcome marked a sharp political shift, as the incumbent center-right government parties lost heavily and Fico's populist campaign succeeded.",
        "voterTurnout": "68.5%",
        "previousResult": "25.0% (2020)",
        "currentResult": "8.9% (2023)"
    },
    "600": {
        "supportChange": -3.8,
        "incumbentParty": "National Republican Association–Colorado Party (ANR-PC)",
        "opposition": "Concertación (opposition coalition)",
        "electionDate": "April 2023",
        "details": "Paraguay's April 2023 election saw the dominant Colorado Party extend its seven-decade rule. Ruling party candidate Santiago Peña won with 42.7% of the vote, defeating opposition coalition leader Efraín Alegre who obtained 27.5%. Turnout was 63.2%. The Colorado Party's vote share dipped slightly from 46.5% in 2018 to 42.7%, but this was enough for a comfortable victory, bucking the regional trend of incumbents being unseated.",
        "voterTurnout": "63.2%",
        "previousResult": "46.5% (2018)",
        "currentResult": "42.7% (2023)"
    }
};


// Debug function to help identify country codes
function getCountryData(iso) {
    if (electionData[iso]) {
        return electionData[iso];
    }
    if (upcomingElections[iso]) {
        return upcomingElections[iso];
    }
    console.error('Missing data for country:', iso);
    return null;
}

// Color scale function
const getColor = (value) => {
    if (value === undefined || value === null) {
        // Check if country has upcoming elections
        return '#e2e8f0';  // Light gray for no data
    }
    const maxChange = 10; // Maximum expected change percentage
    const normalizedValue = Math.max(-maxChange, Math.min(maxChange, value)) / maxChange;

    if (value < 0) {
        // Orange scale for decrease (from light to dark)
        const intensity = Math.abs(normalizedValue);
        const r = Math.round(255 * (1 - intensity * 0.02));  // 249/255
        const g = Math.round(255 * (1 - intensity * 0.55));  // 115/255
        const b = Math.round(255 * (1 - intensity * 0.91));  // 22/255
        return `rgb(${r}, ${g}, ${b})`;
    } else {
        // Teal scale for increase (from light to dark)
        const intensity = normalizedValue;
        const r = Math.round(255 * (1 - intensity * 0.95));  // 13/255
        const g = Math.round(255 * (1 - intensity * 0.42));  // 148/255
        const b = Math.round(255 * (1 - intensity * 0.47));  // 136/255
        return `rgb(${r}, ${g}, ${b})`;
    }
};

// Create a modal for detailed information
function createModal() {
    const modal = document.createElement('div');
    modal.id = 'election-modal';
    modal.style.cssText = `
        display: none;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        max-width: 500px;
        width: 90%;
        z-index: 1000;
    `;

    const overlay = document.createElement('div');
    overlay.id = 'modal-overlay';
    overlay.style.cssText = `
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0,0,0,0.5);
        z-index: 999;
    `;

    const footer = document.createElement('div');
    footer.style.cssText = `
        margin: 40px auto 20px;
        text-align: center;
        font-size: 0.875rem;
        color: #6b7280;
    `;
    footer.innerHTML = `
        Built in Sunny Singapore by <a href="https://github.com/tongrhj" target="_blank" rel="noopener noreferrer" style="color: #3b82f6; text-decoration: none;">Jared</a>
    `;

    document.body.appendChild(modal);
    document.body.appendChild(overlay);
    document.body.appendChild(footer);

    overlay.addEventListener('click', () => {
        modal.style.display = 'none';
        overlay.style.display = 'none';
    });
}

// Show election details in modal
function showElectionDetails(countryCode, countryName) {
    const data = electionData[countryCode];
    const upcomingData = upcomingElections[countryCode];

    if (!data && !upcomingData) return;

    const modal = document.getElementById('election-modal');
    const overlay = document.getElementById('modal-overlay');

    if (data) {
        const changeColor = data.supportChange >= 0 ? '#0d9488' : '#f97316';  // Teal for increase, Orange for decrease
        const changeSymbol = data.supportChange >= 0 ? '+' : '';

        modal.innerHTML = `
            <div style="padding: 1.5rem;">
                <h2 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1.5rem; color: var(--color-text);">${countryName} Election Results</h2>
                <div style="margin: 1.5rem 0; padding: 1.25rem; background: var(--color-bg); border-radius: var(--radius-md); border: 1px solid var(--color-border);">
                    <p style="color: ${changeColor}; font-size: 1.75rem; font-weight: 600; margin: 0;">
                        ${changeSymbol}${data.supportChange}% Support Change
                    </p>
                </div>
                <div style="display: grid; gap: 1rem;">
                    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem;">
                        <div>
                            <p style="font-size: 0.875rem; color: var(--color-text-secondary); margin-bottom: 0.25rem;">Previous Result</p>
                            <p style="font-size: 1.125rem; font-weight: 500; color: var(--color-text);">${data.previousResult}</p>
                        </div>
                        <div>
                            <p style="font-size: 0.875rem; color: var(--color-text-secondary); margin-bottom: 0.25rem;">Current Result</p>
                            <p style="font-size: 1.125rem; font-weight: 500; color: var(--color-text);">${data.currentResult}</p>
                        </div>
                    </div>
                    <div style="height: 1px; background: var(--color-border); margin: 0.5rem 0;"></div>
                    <div>
                        <p style="font-size: 0.875rem; color: var(--color-text-secondary); margin-bottom: 0.25rem;">Election Date</p>
                        <p style="font-size: 1rem; color: var(--color-text);">${data.electionDate}</p>
                    </div>
                    <div>
                        <p style="font-size: 0.875rem; color: var(--color-text-secondary); margin-bottom: 0.25rem;">Voter Turnout</p>
                        <p style="font-size: 1rem; color: var(--color-text);">${data.voterTurnout}</p>
                    </div>
                    <div>
                        <p style="font-size: 0.875rem; color: var(--color-text-secondary); margin-bottom: 0.25rem;">Incumbent Party</p>
                        <p style="font-size: 1rem; color: var(--color-text);">${data.incumbentParty}</p>
                    </div>
                    <div>
                        <p style="font-size: 0.875rem; color: var(--color-text-secondary); margin-bottom: 0.25rem;">Main Opposition</p>
                        <p style="font-size: 1rem; color: var(--color-text);">${data.opposition}</p>
                    </div>
                    <div style="height: 1px; background: var(--color-border); margin: 0.5rem 0;"></div>
                    <div>
                        <p style="font-size: 0.875rem; color: var(--color-text-secondary); margin-bottom: 0.25rem;">Analysis</p>
                        <p style="font-size: 1rem; color: var(--color-text); line-height: 1.5;">${data.details}</p>
                    </div>
                </div>
            </div>
        `;

        modal.style.display = 'block';
        overlay.style.display = 'block';
    } else if (upcomingData) {
        modal.innerHTML = `
            <div style="padding: 1.5rem;">
                <h2 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1.5rem; color: var(--color-text);">${countryName} Upcoming Election</h2>
                <div style="margin: 1.5rem 0; padding: 1.25rem; background: var(--color-bg); border-radius: var(--radius-md); border: 1px solid var(--color-border);">
                    <p style="color: var(--color-text); font-size: 1.75rem; font-weight: 600; margin: 0;">
                        ${upcomingData.electionDate}
                    </p>
                </div>
                <div style="display: grid; gap: 1rem;">
                    <div>
                        <p style="font-size: 0.875rem; color: var(--color-text-secondary); margin-bottom: 0.25rem;">Election Type</p>
                        <p style="font-size: 1rem; color: var(--color-text);">${upcomingData.type}</p>
                    </div>
                    <div>
                        <p style="font-size: 0.875rem; color: var(--color-text-secondary); margin-bottom: 0.25rem;">Current Incumbent Party</p>
                        <p style="font-size: 1rem; color: var(--color-text);">${upcomingData.incumbentParty}</p>
                    </div>
                </div>
            </div>
        `;

        modal.style.display = 'block';
        overlay.style.display = 'block';
    }
}

// Initialize the map
async function initMap() {
    createModal();

    // Set up dimensions
    const width = document.getElementById('map-container').clientWidth;
    const height = width * 0.5;

    // Create SVG
    const svg = d3.select('#world-map')
        .append('svg')
        .attr('viewBox', `0 0 ${width} ${height}`)
        .attr('preserveAspectRatio', 'xMidYMid meet');

    // Create a projection
    const projection = d3.geoMercator()
        .scale(width / 2 / Math.PI)
        .translate([width / 2, height / 2]);

    // Create a path generator
    const path = d3.geoPath().projection(projection);

    // Load world map data
    try {
        const response = await fetch('https://unpkg.com/world-atlas@2/countries-110m.json');
        const worldData = await response.json();
        const countries = topojson.feature(worldData, worldData.objects.countries);

        // Draw countries
        svg.selectAll('path')
            .data(countries.features)
            .enter()
            .append('path')
            .attr('d', path)
            .attr('class', 'country')
            .style('fill', d => {
                const data = electionData[d.id];
                const color = getColor(data?.supportChange);
                return color;
            })
            .style('stroke', '#fff')
            .style('stroke-width', '0.5px')
            .on('mouseover', function (event, d) {
                const tooltip = document.getElementById('tooltip');
                const data = electionData[d.id];
                const upcomingData = upcomingElections[d.id];

                let tooltipText;
                if (data) {
                    const supportText = `${data.supportChange > 0 ? '+' : ''}${data.supportChange}%`;
                    tooltipText = `${d.properties.name}: ${supportText}`;
                } else if (upcomingData) {
                    tooltipText = `${d.properties.name}: Upcoming Election - ${upcomingData.electionDate}`;
                } else {
                    tooltipText = `${d.properties.name}: No data`;
                }

                tooltip.style.display = 'block';
                tooltip.style.left = `${event.pageX + 10}px`;
                tooltip.style.top = `${event.pageY + 10}px`;
                tooltip.textContent = tooltipText;

                d3.select(this)
                    .style('opacity', 0.8);
            })
            .on('mouseout', function () {
                const tooltip = document.getElementById('tooltip');
                tooltip.style.display = 'none';

                d3.select(this)
                    .style('opacity', 1);
            })
            .on('click', function (event, d) {
                showElectionDetails(d.id, d.properties.name);
            });

    } catch (error) {
        console.error('Error loading map data:', error);
    }
}

// Initialize the map when the page loads
window.addEventListener('load', initMap);

// Handle window resize
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        document.getElementById('world-map').innerHTML = '';
        initMap();
    }, 250);
});