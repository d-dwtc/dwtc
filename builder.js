// --- 1. THE MASTER TEMPLATE ---
// This is the raw HTML of the portfolio, but with {{PLACEHOLDERS}} for dynamic data
const MASTER_TEMPLATE = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{NAME}} | Portfolio</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500&display=swap" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet">
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: { sans: ['Inter', 'sans-serif'], serif: ['Playfair Display', 'serif'] },
                    colors: {
                        brand: {
                            50: '{{COLOR_50}}', 100: '{{COLOR_100}}', 500: '{{COLOR_500}}', 600: '{{COLOR_600}}', 900: '{{COLOR_900}}'
                        }
                    }
                }
            }
        }
    </script>
    <style>
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 4px; }
        .fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .hover-lift { transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .hover-lift:hover { transform: translateY(-4px); box-shadow: 0 10px 30px -10px rgba(0,0,0,0.1); }
    </style>
</head>
<body class="bg-slate-50 text-slate-900">
    <nav class="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 z-50">
        <div class="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
            <a href="#" class="text-xl font-serif font-bold tracking-tight text-brand-900">P.</a>
            <div class="hidden md:flex gap-8 text-sm font-medium text-slate-600">
                <a href="#outcomes" class="hover:text-brand-600 transition-colors">Outcomes</a>
                <a href="#work" class="hover:text-brand-600 transition-colors">Case Studies</a>
            </div>
            <a href="#contact" class="px-5 py-2.5 bg-brand-900 text-white text-sm font-medium rounded-lg hover:bg-brand-600 transition-colors">Contact</a>
        </div>
    </nav>

    <main class="max-w-6xl mx-auto px-6 pt-32 pb-24 space-y-32">
        <!-- Hero -->
        <section class="fade-in-up">
            <div class="max-w-3xl space-y-8">
                <div class="inline-flex items-center gap-2 px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-semibold text-brand-600 shadow-sm">
                    <span class="relative flex h-2 w-2">
                      <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-500 opacity-75"></span>
                      <span class="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
                    </span>
                    {{STATUS}}
                </div>
                <div class="space-y-4">
                    <div class="text-lg font-medium text-slate-500 tracking-wide uppercase">{{NAME}}</div>
                    <h1 class="text-5xl md:text-7xl font-serif font-medium leading-[1.1] text-slate-900">{{ROLE}}</h1>
                </div>
                <p class="text-xl text-slate-600 leading-relaxed max-w-2xl">{{BIO}}</p>
                <div class="flex gap-4">
                    <a href="#work" class="px-8 py-4 bg-brand-900 text-white font-medium rounded-xl hover:bg-brand-600 transition-colors">View Work</a>
                </div>
            </div>
        </section>

        <!-- Metrics -->
        <section id="outcomes">
            <div class="mb-12"><h3 class="text-3xl font-serif text-slate-900">Quantified Impact</h3></div>
            <div class="grid md:grid-cols-3 gap-6">
                <!-- M1 -->
                <div class="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover-lift relative overflow-hidden">
                    <div class="relative z-10">
                        <div class="flex items-baseline gap-2 mb-2">
                            <span class="text-5xl font-bold text-slate-900">{{M1_VAL}}</span>
                            <span class="text-brand-600 font-medium text-sm">↑ Lift</span>
                        </div>
                        <h4 class="text-lg font-semibold text-slate-700 mb-4">{{M1_LABEL}}</h4>
                        <div class="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                            <div class="bg-brand-500 h-full rounded-full" style="width: {{M1_PROG}}%"></div>
                        </div>
                        <p class="text-sm text-slate-500 mt-4">{{M1_DESC}}</p>
                    </div>
                </div>
                <!-- M2 -->
                <div class="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover-lift relative overflow-hidden">
                    <div class="relative z-10">
                        <div class="flex items-baseline gap-2 mb-2">
                            <span class="text-5xl font-bold text-slate-900">{{M2_VAL}}</span>
                            <span class="text-brand-600 font-medium text-sm">Pipeline</span>
                        </div>
                        <h4 class="text-lg font-semibold text-slate-700 mb-4">{{M2_LABEL}}</h4>
                        <div class="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                            <div class="bg-brand-500 h-full rounded-full" style="width: {{M2_PROG}}%"></div>
                        </div>
                        <p class="text-sm text-slate-500 mt-4">{{M2_DESC}}</p>
                    </div>
                </div>
                <!-- M3 -->
                <div class="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover-lift relative overflow-hidden">
                    <div class="relative z-10">
                        <div class="flex items-baseline gap-2 mb-2">
                            <span class="text-5xl font-bold text-slate-900">{{M3_VAL}}</span>
                            <span class="text-brand-600 font-medium text-sm">Faster</span>
                        </div>
                        <h4 class="text-lg font-semibold text-slate-700 mb-4">{{M3_LABEL}}</h4>
                        <div class="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                            <div class="bg-brand-500 h-full rounded-full" style="width: {{M3_PROG}}%"></div>
                        </div>
                        <p class="text-sm text-slate-500 mt-4">{{M3_DESC}}</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Case Study 1 -->
        <section id="work" class="space-y-20">
            <div class="border-b border-slate-200 pb-8"><h3 class="text-3xl font-serif text-slate-900">Featured Case Study</h3></div>
            <article class="grid md:grid-cols-12 gap-12 group">
                <div class="md:col-span-4 space-y-4">
                    <div class="text-sm font-medium text-slate-500">{{CS1_META}}</div>
                    <h4 class="text-2xl font-bold text-slate-900">{{CS1_TITLE}}</h4>
                </div>
                <div class="md:col-span-8 space-y-8">
                    <div class="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                        <h5 class="font-bold text-slate-900 mb-2">The Situation</h5>
                        <p class="text-slate-600 leading-relaxed">{{CS1_SITUATION}}</p>
                    </div>
                    <div class="grid sm:grid-cols-2 gap-8">
                        <div>
                            <h5 class="font-bold text-slate-900 mb-2 border-l-2 border-red-500 pl-3">The Challenge</h5>
                            <p class="text-sm text-slate-600">{{CS1_CHALLENGE}}</p>
                        </div>
                        <div>
                            <h5 class="font-bold text-slate-900 mb-2 border-l-2 border-emerald-500 pl-3">The Outcome</h5>
                            <p class="text-sm text-slate-600">{{CS1_OUTCOME}}</p>
                        </div>
                    </div>
                </div>
            </article>
        </section>

        <!-- Writing Section -->
        <section id="writing">
            <div class="flex items-end justify-between mb-12">
                <div><h3 class="text-3xl font-serif text-slate-900">Featured Writing</h3></div>
            </div>
            <div class="grid md:grid-cols-3 gap-8">
                <!-- Post 1 -->
                <div class="group block space-y-4">
                    <div class="aspect-video bg-slate-100 rounded-2xl overflow-hidden relative border border-slate-200">
                        <div class="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-xs font-bold shadow-sm">{{POST1_CATEGORY}}</div>
                    </div>
                    <div>
                        <div class="text-xs text-slate-400 mb-2">{{POST1_DATE}}</div>
                        <h4 class="text-xl font-bold text-slate-900 group-hover:text-brand-600 transition-colors mb-2">{{POST1_TITLE}}</h4>
                        <p class="text-sm text-slate-600 line-clamp-2">{{POST1_DESC}}</p>
                    </div>
                </div>
                <!-- Post 2 -->
                <div class="group block space-y-4">
                    <div class="aspect-video bg-slate-100 rounded-2xl overflow-hidden relative border border-slate-200">
                        <div class="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-xs font-bold shadow-sm">{{POST2_CATEGORY}}</div>
                    </div>
                    <div>
                        <div class="text-xs text-slate-400 mb-2">{{POST2_DATE}}</div>
                        <h4 class="text-xl font-bold text-slate-900 group-hover:text-brand-600 transition-colors mb-2">{{POST2_TITLE}}</h4>
                        <p class="text-sm text-slate-600 line-clamp-2">{{POST2_DESC}}</p>
                    </div>
                </div>
                <!-- Post 3 -->
                <div class="group block space-y-4">
                    <div class="aspect-video bg-slate-100 rounded-2xl overflow-hidden relative border border-slate-200">
                        <div class="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-xs font-bold shadow-sm">{{POST3_CATEGORY}}</div>
                    </div>
                    <div>
                        <div class="text-xs text-slate-400 mb-2">{{POST3_DATE}}</div>
                        <h4 class="text-xl font-bold text-slate-900 group-hover:text-brand-600 transition-colors mb-2">{{POST3_TITLE}}</h4>
                        <p class="text-sm text-slate-600 line-clamp-2">{{POST3_DESC}}</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Gallery -->
        <section id="gallery">
            <div class="mb-12"><h3 class="text-3xl font-serif text-slate-900">Gallery</h3></div>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div class="col-span-2 row-span-2 relative group overflow-hidden rounded-2xl bg-slate-100 aspect-square md:aspect-auto">
                    <img src="{{GALLERY1}}" class="object-cover w-full h-full hover:scale-105 transition-transform duration-500" alt="Work">
                    <div class="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black/80 to-transparent w-full">
                        <p class="text-white text-sm font-medium">Team Strategy Workshop</p>
                    </div>
                </div>
                <div class="relative group overflow-hidden rounded-2xl bg-slate-100 aspect-square">
                    <img src="{{GALLERY2}}" class="object-cover w-full h-full hover:scale-105 transition-transform duration-500" alt="Data">
                </div>
                <div class="relative group overflow-hidden rounded-2xl bg-slate-100 aspect-square">
                    <img src="{{GALLERY3}}" class="object-cover w-full h-full hover:scale-105 transition-transform duration-500" alt="Presentation">
                </div>
                <div class="col-span-2 relative group overflow-hidden rounded-2xl bg-slate-100 aspect-[2/1]">
                    <img src="{{GALLERY4}}" class="object-cover w-full h-full hover:scale-105 transition-transform duration-500" alt="Analytics">
                    <div class="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black/80 to-transparent w-full">
                        <p class="text-white text-sm font-medium">Growth Dashboards</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Resources Section -->
        <section id="resources" class="bg-slate-900 rounded-3xl p-8 md:p-16 text-white relative overflow-hidden">
            <div class="absolute top-0 right-0 w-96 h-96 bg-brand-600 rounded-full blur-[100px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>
            <div class="relative z-10 grid md:grid-cols-2 gap-12">
                <div>
                    <h3 class="text-3xl font-serif mb-4">Resources</h3>
                    <p class="text-slate-400 mb-8">Download my full professional profile and case study decks.</p>
                    <div class="space-y-4">
                        <a href="{{RES1_LINK}}" class="flex items-center justify-between p-4 bg-white/10 rounded-xl hover:bg-white/15 transition-colors">
                            <div class="flex items-center gap-4">
                                <i class="ri-file-user-line text-2xl text-blue-400"></i>
                                <div><div class="font-medium text-white">{{RES1_TITLE}}</div></div>
                            </div>
                            <i class="ri-download-line text-slate-400"></i>
                        </a>
                        <a href="{{RES2_LINK}}" class="flex items-center justify-between p-4 bg-white/10 rounded-xl hover:bg-white/15 transition-colors">
                            <div class="flex items-center gap-4">
                                <i class="ri-slideshow-line text-2xl text-purple-400"></i>
                                <div><div class="font-medium text-white">{{RES2_TITLE}}</div></div>
                            </div>
                            <i class="ri-download-line text-slate-400"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <!-- Footer -->
        <section id="contact" class="text-center max-w-2xl mx-auto space-y-8">
            <h2 class="text-4xl font-serif text-slate-900">Ready to scale?</h2>
            <div class="flex justify-center gap-4">
                <a href="mailto:{{EMAIL}}" class="px-8 py-4 bg-brand-900 text-white font-bold rounded-full hover:bg-brand-600 transition-shadow hover:shadow-xl">Email Me</a>
            </div>
            <div class="pt-16 border-t border-slate-200 mt-16 flex justify-between items-center text-sm text-slate-500">
                <div>&copy; {{YEAR}} {{NAME}}</div>
                <div class="flex gap-6">
                    {{TWITTER_LINK}}
                    {{LINKEDIN_LINK}}
                    {{TELEGRAM_LINK}}
                </div>
            </div>
        </section>
    </main>
</body>
</html>`;

// --- 2. COLOR THEMES ---
const THEMES = {
    emerald: { 50: '#ecfdf5', 100: '#d1fae5', 500: '#10b981', 600: '#059669', 900: '#064e3b' },
    blue:    { 50: '#eff6ff', 100: '#dbeafe', 500: '#3b82f6', 600: '#2563eb', 900: '#1e3a8a' },
    purple:  { 50: '#faf5ff', 100: '#f3e8ff', 500: '#a855f7', 600: '#9333ea', 900: '#581c87' },
    orange:  { 50: '#fff7ed', 100: '#ffedd5', 500: '#f97316', 600: '#ea580c', 900: '#7c2d12' },
    slate:   { 50: '#f8fafc', 100: '#f1f5f9', 500: '#64748b', 600: '#475569', 900: '#0f172a' }
};

// --- 3. HELPER FUNCTIONS ---
let debounceTimer;
function updatePreviewDebounced() {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(updatePreview, 300);
}

function getValue(id) {
    return document.getElementById(id).value;
}

function generateHTML() {
    // 1. Get Data
    const name = getValue('p_name');
    const role = getValue('p_role').replace(/\\n/g, '<br>');
    const bio = getValue('p_bio');
    const status = getValue('p_status');
    const email = getValue('p_email');
    const themeKey = getValue('themeColor');
    
    // Metrics
    const m1_val = getValue('m1_val'); const m1_label = getValue('m1_label'); const m1_desc = getValue('m1_desc'); const m1_prog = getValue('m1_prog');
    const m2_val = getValue('m2_val'); const m2_label = getValue('m2_label'); const m2_desc = getValue('m2_desc'); const m2_prog = getValue('m2_prog');
    const m3_val = getValue('m3_val'); const m3_label = getValue('m3_label'); const m3_desc = getValue('m3_desc'); const m3_prog = getValue('m3_prog');

    // Case Study 1
    const cs1_title = getValue('cs1_title');
    const cs1_meta = getValue('cs1_meta');
    const cs1_situation = getValue('cs1_situation');
    const cs1_challenge = getValue('cs1_challenge');
    const cs1_outcome = getValue('cs1_outcome');

    // Posts
    const post1_title = getValue('post1_title'); const post1_category = getValue('post1_category'); const post1_date = getValue('post1_date'); const post1_desc = getValue('post1_desc');
    const post2_title = getValue('post2_title'); const post2_category = getValue('post2_category'); const post2_date = getValue('post2_date'); const post2_desc = getValue('post2_desc');
    const post3_title = getValue('post3_title'); const post3_category = getValue('post3_category'); const post3_date = getValue('post3_date'); const post3_desc = getValue('post3_desc');

    // Gallery
    const gallery1 = getValue('gallery1'); const gallery2 = getValue('gallery2'); const gallery3 = getValue('gallery3'); const gallery4 = getValue('gallery4');

    // Social Links
    const twitter = getValue('social_twitter'); const linkedin = getValue('social_linkedin'); const telegram = getValue('social_telegram');
    const twitterHTML = twitter ? `<a href="${twitter}" class="hover:text-slate-900">Twitter</a>` : '';
    const linkedinHTML = linkedin ? `<a href="${linkedin}" class="hover:text-slate-900">LinkedIn</a>` : '';
    const telegramHTML = telegram ? `<a href="${telegram}" class="hover:text-slate-900">Telegram</a>` : '';

    // Resources
    const res1_title = getValue('res1_title'); const res1_link = getValue('res1_link');
    const res2_title = getValue('res2_title'); const res2_link = getValue('res2_link');

    // Colors
    const colors = THEMES[themeKey] || THEMES.emerald;

    // 2. Replace Placeholders
    let html = MASTER_TEMPLATE
        .replace(/{{NAME}}/g, name)
        .replace(/{{ROLE}}/g, role)
        .replace(/{{BIO}}/g, bio)
        .replace(/{{STATUS}}/g, status)
        .replace(/{{EMAIL}}/g, email)
        .replace(/{{YEAR}}/g, new Date().getFullYear())
        // Metrics
        .replace(/{{M1_VAL}}/g, m1_val).replace(/{{M1_LABEL}}/g, m1_label).replace(/{{M1_DESC}}/g, m1_desc).replace(/{{M1_PROG}}/g, m1_prog)
        .replace(/{{M2_VAL}}/g, m2_val).replace(/{{M2_LABEL}}/g, m2_label).replace(/{{M2_DESC}}/g, m2_desc).replace(/{{M2_PROG}}/g, m2_prog)
        .replace(/{{M3_VAL}}/g, m3_val).replace(/{{M3_LABEL}}/g, m3_label).replace(/{{M3_DESC}}/g, m3_desc).replace(/{{M3_PROG}}/g, m3_prog)
        // Case Study
        .replace(/{{CS1_TITLE}}/g, cs1_title)
        .replace(/{{CS1_META}}/g, cs1_meta)
        .replace(/{{CS1_SITUATION}}/g, cs1_situation)
        .replace(/{{CS1_CHALLENGE}}/g, cs1_challenge)
        .replace(/{{CS1_OUTCOME}}/g, cs1_outcome)
        // Posts
        .replace(/{{POST1_TITLE}}/g, post1_title).replace(/{{POST1_CATEGORY}}/g, post1_category).replace(/{{POST1_DATE}}/g, post1_date).replace(/{{POST1_DESC}}/g, post1_desc)
        .replace(/{{POST2_TITLE}}/g, post2_title).replace(/{{POST2_CATEGORY}}/g, post2_category).replace(/{{POST2_DATE}}/g, post2_date).replace(/{{POST2_DESC}}/g, post2_desc)
        .replace(/{{POST3_TITLE}}/g, post3_title).replace(/{{POST3_CATEGORY}}/g, post3_category).replace(/{{POST3_DATE}}/g, post3_date).replace(/{{POST3_DESC}}/g, post3_desc)
        // Gallery
        .replace(/{{GALLERY1}}/g, gallery1).replace(/{{GALLERY2}}/g, gallery2).replace(/{{GALLERY3}}/g, gallery3).replace(/{{GALLERY4}}/g, gallery4)
        // Social
        .replace(/{{TWITTER_LINK}}/g, twitterHTML).replace(/{{LINKEDIN_LINK}}/g, linkedinHTML).replace(/{{TELEGRAM_LINK}}/g, telegramHTML)
        // Resources
        .replace(/{{RES1_TITLE}}/g, res1_title).replace(/{{RES1_LINK}}/g, res1_link)
        .replace(/{{RES2_TITLE}}/g, res2_title).replace(/{{RES2_LINK}}/g, res2_link)
        // Colors
        .replace(/{{COLOR_50}}/g, colors[50])
        .replace(/{{COLOR_100}}/g, colors[100])
        .replace(/{{COLOR_500}}/g, colors[500])
        .replace(/{{COLOR_600}}/g, colors[600])
        .replace(/{{COLOR_900}}/g, colors[900]);

    return html;
}

function updatePreview() {
    const html = generateHTML();
    const frame = document.getElementById('previewFrame');
    // We write to the document to ensure immediate update without flickering source loading
    frame.contentWindow.document.open();
    frame.contentWindow.document.write(html);
    frame.contentWindow.document.close();
}

// --- 4. EXPORT FUNCTIONS ---

function downloadSource() {
    const html = generateHTML();
    const zip = new JSZip();
    
    // Add files
    zip.file("index.html", html);
    zip.file("README.md", "# My Portfolio\n\nGenerated with Outcome Portfolio Builder.\n\nTo deploy, simply upload 'index.html' to GitHub Pages or Netlify.");
    
    // Generate zip
    zip.generateAsync({type:"blob"}).then(function(content) {
        saveAs(content, "portfolio-website.zip");
    });
}

function downloadPDF() {
    const frame = document.getElementById('previewFrame');
    frame.contentWindow.focus();
    frame.contentWindow.print();
}

// Initialize on Load
document.addEventListener('DOMContentLoaded', () => {
    updatePreview();
});