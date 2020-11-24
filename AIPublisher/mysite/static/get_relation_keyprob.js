function get_random_keyprob(){
    document.getElementById("key_prob").querySelector(".relation_context").innerText = "돈";
}
function get_random_relations(){
    document.getElementById("relation_card_pos1").querySelector(".relation_context").innerText = "사이좋아요";
    document.getElementById("relation_card_pos2").querySelector(".relation_context").innerText = "아주좋아요";
    document.getElementById("relation_card_pos3").querySelector(".relation_context").innerText = "약간좋아요";
    document.getElementById("relation_card_neu1").querySelector(".relation_context").innerText = "모르는사이";
    document.getElementById("relation_card_neu2").querySelector(".relation_context").innerText = "애매한사이";
    document.getElementById("relation_card_neg1").querySelector(".relation_context").innerText = "사이안좋음";
    document.getElementById("relation_card_neg2").querySelector(".relation_context").innerText = "아주안좋음";
    document.getElementById("relation_card_neg3").querySelector(".relation_context").innerText = "약간안좋음";
}