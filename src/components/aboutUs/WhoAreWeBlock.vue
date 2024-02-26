<template>
  <section class="who-are-we-section">
    <div class="content">
      <h2>Kdo jsme</h2>

      <p>Již jedenáct let se v organizaci ProStředoškoláky snažíme motivovat studenty středních škol k účasti na mimoškolních aktivitách. Každoročně pořádáme soutěž Středoškolák roku, v rámci které oceňujeme středoškoláky, kteří jsou aktivní ve svém volném čase.</p><p>Věříme totiž, že získáváním zkušeností i mimo školu se pak lépe rozhodujeme o svém budoucím povolání, efektivněji a smysluplněji se učíme a tříbíme tím i svou osobnost.</p>
      <p>Během deseti let pořádání soutěže jsme sesbírali tu nejkomplexnější databázi mimoškolních aktivit a volně ji šíříme mezi české středoškoláky.
        Zkrátka chceme všem ukázat, že vzdělávání mimo školu dává smysl a zaslouží si pozornost. To vše dobrovolně zajišťuje tým deseti středoškoláků, studentů či již pracujících mladých lidí.</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'who-are-we-block'
}
</script>

<style scoped lang="scss">
.content {
  width: 80%;
  max-width: 1200px;
  margin: 20px auto;
  padding: 40px 40px 0;

  @media (max-width: 800px) {
    width: 90%;
    padding: 40px 20px 0;
  }
}

section.who-are-we-section {
  padding: 20px 0 10px;
  position: relative;

  h2 {
    text-align: left;
    font-size: 30px;
    font-weight: normal;
    line-height: 1.2;
  }

  p {
    margin-bottom: 40px;
  }
}
</style>
