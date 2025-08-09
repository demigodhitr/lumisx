from django.shortcuts import render
import random


def home_index(request):
    templates = ['home1.html', 'home2.html', 'home3.html']
    template_to_use = request.session.get('template')

    if not template_to_use:
        template_to_use = random.choice(templates)
        request.session.setdefault('template', template_to_use)

    return render(request, template_to_use, {})

# Create your views here.
